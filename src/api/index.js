const { dummy, dummy_user } = require('./dummu');

module.exports.getPRs = async (username) => {
  try {
    let ar_PR = [];

    // const user_response = await fetch(
    //   `https://api.github.com/users/${username}`
    // );
    // const userData = await user_response.json();
    // if (!userData.id) {
    //   throw 'Invalid Username';
    // }
    // const prs_response = await fetch(
    //   `${process.env.REACT_APP_GITHUB_API}?q=author:${username}+created:>2021-08-29+type:pr`
    // );

    // const user_prs_resp = await prs_response.json();

    const user_prs_resp = dummy;

    if (user_prs_resp?.incomplete_results) {
      throw { message: 'Unable to fetch Pull Requests' };
    }
    if (user_prs_resp?.total_count === 0 || !user_prs_resp.items.length) {
      throw { message: 'No contribution found' };
    }

    const prs = user_prs_resp.items;

    prs.length &&
      prs.map(async (pr) => {
        var _has_hacktoberfest_label = pr.labels.some((label) => {
          return label.name === 'hacktoberfest-accepted';
        });

        // const user_repo_topics = await fetch(pr.repository_url + '/topics', {
        //   method: 'GET',
        //   headers: {
        //     Accept: 'application/vnd.github.mercy-preview+json',
        //     Authorization: `token ${process.env.REACT_APP_HEADER_AUTHORIZATION}`,
        //   },
        // });
        // const repo_topics = await user_repo_topics.json();
        const repo_topics = {
          names: [
            'profolio',
            'website',
            'github-pages',
            'personal-website',
            'hacktoberfest',
          ],
        };
        var _has_hacktoberfest_topic =
          repo_topics.names?.includes('hacktoberfest');

        ar_PR.push({
          title: pr.title,
          pr_url: pr.html_url,
          repo_name:
            pr.repository_url.split('/')[
              pr.repository_url.split('/').length - 1
            ],
          repo_url: pr.repository_url,
          _has_hacktoberfest_topic,
          _has_hacktoberfest_label,
          state: pr.state,
          created_at: pr.created_at,
        });
      });
    return { user_prs: ar_PR, user_avatar_url: dummy_user.avatar_url };
  } catch (error) {
    console.log('API error: ' + error);
    return { err: error.message || 'Something went wrong' };
  }
};
