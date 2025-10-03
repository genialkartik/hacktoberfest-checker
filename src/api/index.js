import axios from 'axios';
import defaultAvatar from '../components/assets/images/logohck.png';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_BASEURL,
  timeout: 10000,
  headers: {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'Hacktoberfest-Checker-2025/1.0.0',
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

// Add authorization header if token is available
// if (process.env.REACT_APP_HEADER_AUTHORIZATION) {
//   apiClient.defaults.headers.common['Authorization'] =
//     `token ${process.env.REACT_APP_HEADER_AUTHORIZATION}`;
// }

class GithubApi {
  async getPRs(username) {
    try {
      // Validate input
      if (!username || typeof username !== 'string' || username.trim() === '') {
        throw new Error('Username is required and must be a valid string');
      }

      const trimmedUsername = username.trim();
      let ar_PR = [];

      // Fetch user data
      const userResponse = await apiClient.get(`/users/${trimmedUsername}`);
      const userData = userResponse?.data;

      if (!userData || !userData.id) {
        throw new Error('Invalid Username or User not found');
      }

      // Use the original working fetch approach
      let userPrsResp = null;

      const prs_response = await fetch(
        `https://api.github.com/search/issues?q=author:${trimmedUsername}+created:>2025-09-30T23:59:59+type:pr`,
      );

      const user_prs_resp = await prs_response.json();

      if (user_prs_resp?.incomplete_results) {
        throw new Error('Unable to fetch Pull Requests');
      }
      if (user_prs_resp?.total_count === 0 || !user_prs_resp.items.length) {
        // Try 2024 data if no 2025 data found
        console.log('No 2025 data found, trying 2024...');
        const fallback_response = await fetch(
          `https://api.github.com/search/issues?q=author:${trimmedUsername}+created:>2024-09-30T09:30:00+type:pr`,
        );
        const fallback_resp = await fallback_response.json();

        if (fallback_resp?.total_count === 0 || !fallback_resp.items.length) {
          throw new Error('No contribution found!');
        }

        userPrsResp = fallback_resp;
      } else {
        userPrsResp = user_prs_resp;
      }

      const prs = userPrsResp?.items || [];
      for (let i = 0; i < prs.length; i++) {
        const pr = prs[i];

        // Validate PR object
        if (!pr || !pr.repository_url) {
          continue; // Skip invalid PR objects
        }

        // Check for hacktoberfest-accepted label
        const hasHacktoberfestLabel = Array.isArray(pr.labels)
          ? pr.labels.some((label) => label?.name === 'hacktoberfest-accepted')
          : false;

        let hasHacktoberfestTopic = false;

        try {
          // Fetch repository topics
          const repoTopicsResponse = await apiClient.get(
            `${pr.repository_url.replace(process.env.REACT_APP_GITHUB_BASEURL, '')}/topics`,
            {
              headers: {
                Accept: 'application/vnd.github+json',
              },
            },
          );

          const repoTopics = repoTopicsResponse?.data;
          hasHacktoberfestTopic = Array.isArray(repoTopics?.names)
            ? repoTopics.names.includes('hacktoberfest')
            : false;
        } catch (topicError) {
          console.warn(
            `Failed to fetch topics for ${pr.repository_url}:`,
            topicError.message,
          );
          // Continue without topic info
        }

        // Extract repository name safely
        const repoUrlParts = pr.repository_url.split('/');
        const repoName =
          repoUrlParts.length > 0
            ? repoUrlParts[repoUrlParts.length - 1]
            : 'Unknown Repository';

        ar_PR.push({
          title: pr.title || 'No title',
          pr_url: pr.html_url || '',
          repo_name: repoName,
          repo_url: pr.repository_url || '',
          _has_hacktoberfest_topic: hasHacktoberfestTopic,
          _has_hacktoberfest_label: hasHacktoberfestLabel,
          state: pr.state || 'unknown',
          created_at: pr.created_at || null,
          merged_at: pr.merged_at || null,
          is_valid: hasHacktoberfestLabel || hasHacktoberfestTopic,
        });
      }

      return {
        user_prs: ar_PR,
        user_avatar_url: userData.avatar_url || defaultAvatar,
        user_name: userData.name || userData.login || 'Unknown User',
        user_login: userData.login || 'unknown',
        total_prs: ar_PR.length,
        valid_prs: ar_PR.filter((pr) => pr.is_valid).length,
      };
    } catch (error) {
      console.error('Error in getPRs:', error);

      // Handle axios errors specifically
      if (error.response) {
        const status = error.response.status;
        if (status === 404) {
          throw new Error('User not found');
        } else if (status === 403) {
          throw new Error('API rate limit exceeded. Please try again later.');
        } else if (status === 422) {
          throw new Error('Invalid search query parameters');
        } else {
          throw new Error(
            `API Error: ${error.response.statusText || 'Unknown error'}`,
          );
        }
      } else if (error.code === 'ECONNABORTED') {
        throw new Error(
          'Request timeout. Please check your internet connection.',
        );
      } else if (error.message) {
        throw error; // Re-throw our custom errors
      } else {
        throw new Error(
          'An unexpected error occurred while fetching pull requests',
        );
      }
    }
  }

  async getContributors() {
    try {
      const response = await apiClient.get(
        '/repos/genialkartik/hacktoberfest-checker/contributors',
      );
      const contributors = response?.data;

      if (!Array.isArray(contributors)) {
        console.warn('Contributors data is not an array:', contributors);
        return [];
      }

      return contributors.filter(
        (contributor) => contributor && contributor.login,
      );
    } catch (error) {
      console.error('Error fetching contributors:', error);
      return []; // Return empty array instead of throwing
    }
  }
}

const githubApi = new GithubApi();
export default githubApi;
