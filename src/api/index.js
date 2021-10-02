class GithubApi {
  async getPRs(username) {
    try {
      let ar_PR = [];
      const user_response = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await user_response.json();
      if (!userData.id) {
        throw 'Invalid Username';
      }
      const prs_response = await fetch(
        `${process.env.REACT_APP_GITHUB_API}?q=author:${username}+created:>2021-09-30T09:30:00+type:pr`
      );

      const user_prs_resp = await prs_response.json();

      if (user_prs_resp?.incomplete_results) {
        throw 'Unable to fetch Pull Requests';
      }
      if (user_prs_resp?.total_count === 0 || !user_prs_resp.items.length) {
        throw 'No contribution found! Click on Participate to start right away!';
      }

      const prs = user_prs_resp.items;

      for (let i = 0; i < prs.length; i++) {
        var _has_hacktoberfest_label = prs[i].labels.some((label) => {
          return label.name === 'hacktoberfest-accepted';
        });

        const user_repo_topics = await fetch(
          prs[i].repository_url + '/topics',
          {
            method: 'GET',
            headers: {
              Accept: 'application/vnd.github.mercy-preview+json',
              Authorization: `token ${process.env.REACT_APP_HEADER_AUTHORIZATION}`,
            },
          }
        );
        const repo_topics = await user_repo_topics.json();

        var _has_hacktoberfest_topic =
          repo_topics.names?.includes('hacktoberfest');

        ar_PR.push({
          title: prs[i].title,
          pr_url: prs[i].html_url,
          repo_name:
            prs[i].repository_url.split('/')[
            prs[i].repository_url.split('/').length - 1
            ],
          repo_url: prs[i].repository_url,
          _has_hacktoberfest_topic,
          _has_hacktoberfest_label,
          state: prs[i].state,
          created_at: prs[i].created_at,
        });
      }
      return {
        user_prs: ar_PR,
        user_avatar_url:
          userData.avatar_url ||
          'https://hacktoberfest.digitalocean.com/_nuxt/img/sign-up-accent-right.2faed05.svg',
      };
    } catch (error) {
      return { err: error || 'Something went wrong' };
    }
  }

  async getContributors() {
    const project_contri_resp = await fetch(
      `https://api.github.com/repos/genialkartik/hacktoberfest-checker/contributors`
    );
    const contributors = (await project_contri_resp.json()) || [];
    return contributors;
  }
}

export default new GithubApi();
