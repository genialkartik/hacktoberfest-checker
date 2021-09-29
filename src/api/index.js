module.exports.getPRs = async (username) => {
  try {
    // let ar_PR = [];

    // const response = await fetch(
    //   `https://api.github.com/search/issues?q=author:${username}+created:>2020-08-29+type:pr`
    // );
    // const data = await response.json();
    // var t = data.items.length;
    // var item = data.items;

    // for (var i = 0; i < t; i++) {
    //   var _label = item[i].labels.find(
    //     (e) => e.name == 'hacktoberfest-accepted'
    //   );
    //   let label_bool = _label ? true : false;

    //   const user_repo_res = await fetch(item[i].repository_url + '/topics', {
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/vnd.github.mercy-preview+json',
    //       Authorization: 'token ee8a590676c13ab98ed25693da8a0fd4281dc0cb',
    //     },
    //   });
    //   const user_data = await user_repo_res.json();
    //   var _topic = user_data.names.find((e) => e == 'hacktoberfest');
    //   let topic_bool = _topic ? true : false;

    //   ar_PR.push({
    //     title: item[i].title,
    //     pr_url: item[i].html_url,
    //     repo_name: item[i].html_url.substring(
    //       item[i].html_url.indexOf('/', 18) + 1,
    //       item[i].html_url.lastIndexOf(
    //         '/',
    //         item[i].html_url.lastIndexOf('/') - 1
    //       )
    //     ),
    //     repo_url: item[i].html_url.substring(
    //       0,
    //       item[i].html_url.lastIndexOf(
    //         '/',
    //         item[i].html_url.lastIndexOf('/') - 1
    //       )
    //     ),
    //     topic_bool,
    //     label_bool,
    //     state: item[i].state,
    //     created_at: item[i].created_at,
    //   });
    // }
    // console.log(ar_PR);
    // return { PRs: ar_PR, avatar_url: item[0].user.avatar_url };
    return {
      PRs: [
        {
          title: 'right bar, docker UI fixes',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/28',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-12-08T07:58:12Z',
        },
        {
          title: 'Macfolio do',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/27',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-12-08T05:57:12Z',
        },
        {
          title: 'Macfolio S3B',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/26',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-11-15T14:35:04Z',
        },
        {
          title: 'optimized production code',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/25',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-11-15T06:20:38Z',
        },
        {
          title: 'Updated Docs',
          pr_url: 'https://github.com/sandeep889/newsmania-2.0/pull/8',
          repo_name: 'sandeep889/newsmania-2.0',
          repo_url: 'https://github.com/sandeep889/newsmania-2.0',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-10-29T16:37:41Z',
        },
        {
          title: 'even branch master and macfolio3.0',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/24',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-10-29T15:20:20Z',
        },
        {
          title: 'default picture url changes',
          pr_url:
            'https://github.com/genialkartik/hacktoberfest-checker/pull/3',
          repo_name: 'genialkartik/hacktoberfest-checker',
          repo_url: 'https://github.com/genialkartik/hacktoberfest-checker',
          topic_bool: true,
          label_bool: false,
          state: 'closed',
          created_at: '2020-10-24T12:45:17Z',
        },
        {
          title: 'Create CODE_OF_CONDUCT.md',
          pr_url:
            'https://github.com/genialkartik/hacktoberfest-checker/pull/1',
          repo_name: 'genialkartik/hacktoberfest-checker',
          repo_url: 'https://github.com/genialkartik/hacktoberfest-checker',
          topic_bool: true,
          label_bool: false,
          state: 'closed',
          created_at: '2020-10-20T19:10:43Z',
        },
        {
          title: 'Github Profile New Look',
          pr_url: 'https://github.com/himanshu-brown/himanshu-brown/pull/1',
          repo_name: 'himanshu-brown/himanshu-brown',
          repo_url: 'https://github.com/himanshu-brown/himanshu-brown',
          topic_bool: false,
          label_bool: true,
          state: 'closed',
          created_at: '2020-10-13T18:27:05Z',
        },
        {
          title: 'Create README.md',
          pr_url: 'https://github.com/JarialAnkur/NodeJS-Guide/pull/1',
          repo_name: 'JarialAnkur/NodeJS-Guide',
          repo_url: 'https://github.com/JarialAnkur/NodeJS-Guide',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-10-02T03:04:29Z',
        },
        {
          title: 'Revert "Ecnhance function script slides"',
          pr_url:
            'https://github.com/genialkartik/genialkartik.github.io/pull/7',
          repo_name: 'genialkartik/genialkartik.github.io',
          repo_url: 'https://github.com/genialkartik/genialkartik.github.io',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-10-02T02:51:44Z',
        },
        {
          title: 'Revert "Improve Docs"',
          pr_url:
            'https://github.com/genialkartik/genialkartik.github.io/pull/3',
          repo_name: 'genialkartik/genialkartik.github.io',
          repo_url: 'https://github.com/genialkartik/genialkartik.github.io',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-10-01T08:04:27Z',
        },
        {
          title: 'Installation guide',
          pr_url: 'https://github.com/ayushisingla/Progress-Tracker/pull/1',
          repo_name: 'ayushisingla/Progress-Tracker',
          repo_url: 'https://github.com/ayushisingla/Progress-Tracker',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-30T19:39:02Z',
        },
        {
          title: 'major update in Documentation',
          pr_url: 'https://github.com/NorinMp143/LiteBooky/pull/3',
          repo_name: 'NorinMp143/LiteBooky',
          repo_url: 'https://github.com/NorinMp143/LiteBooky',
          topic_bool: false,
          label_bool: true,
          state: 'closed',
          created_at: '2020-09-30T18:56:07Z',
        },
        {
          title: 'Major updation in Documentation',
          pr_url: 'https://github.com/JarialAnkur/numberFacts/pull/1',
          repo_name: 'JarialAnkur/numberFacts',
          repo_url: 'https://github.com/JarialAnkur/numberFacts',
          topic_bool: false,
          label_bool: true,
          state: 'closed',
          created_at: '2020-09-30T16:55:12Z',
        },
        {
          title: 'Macfolio3.0 prerelease',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/13',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-27T07:06:53Z',
        },
        {
          title: 'version patch 3.6.0',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/12',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-23T14:52:42Z',
        },
        {
          title: 'version patch 3.5.0',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/11',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-23T05:53:58Z',
        },
        {
          title: 'proxy fixed',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/10',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-21T06:09:14Z',
        },
        {
          title: 'Macfolio3.0',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/9',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-21T05:58:49Z',
        },
        {
          title: 'Macfolio3.0',
          pr_url: 'https://github.com/genialkartik/Macfolio/pull/8',
          repo_name: 'genialkartik/Macfolio',
          repo_url: 'https://github.com/genialkartik/Macfolio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-21T05:38:56Z',
        },
        {
          title: 'hide secrets',
          pr_url:
            'https://github.com/saikatharryc/sample-RazorPay--nodejs/pull/4',
          repo_name: 'saikatharryc/sample-RazorPay--nodejs',
          repo_url: 'https://github.com/saikatharryc/sample-RazorPay--nodejs',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-20T15:16:45Z',
        },
        {
          title: 'v1.0',
          pr_url: 'https://github.com/genialkartik/react-devdotto/pull/5',
          repo_name: 'genialkartik/react-devdotto',
          repo_url: 'https://github.com/genialkartik/react-devdotto',
          topic_bool: false,
          label_bool: true,
          state: 'closed',
          created_at: '2020-09-14T13:25:30Z',
        },
        {
          title: 'Heroku',
          pr_url: 'https://github.com/genialkartik/Blog-Socketio/pull/1',
          repo_name: 'genialkartik/Blog-Socketio',
          repo_url: 'https://github.com/genialkartik/Blog-Socketio',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-08T10:31:47Z',
        },
        {
          title: 'demo setup',
          pr_url: 'https://github.com/genialkartik/react-devdotto/pull/4',
          repo_name: 'genialkartik/react-devdotto',
          repo_url: 'https://github.com/genialkartik/react-devdotto',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-03T08:30:10Z',
        },
        {
          title: 'v1.0.0',
          pr_url: 'https://github.com/genialkartik/react-devdotto/pull/1',
          repo_name: 'genialkartik/react-devdotto',
          repo_url: 'https://github.com/genialkartik/react-devdotto',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-03T07:14:51Z',
        },
        {
          title: 'Fully automate dev setup with Gitpod',
          pr_url: 'https://github.com/genialkartik/100daysofcode/pull/2',
          repo_name: 'genialkartik/100daysofcode',
          repo_url: 'https://github.com/genialkartik/100daysofcode',
          topic_bool: false,
          label_bool: false,
          state: 'closed',
          created_at: '2020-09-01T07:19:32Z',
        },
      ],
      avatar_url: 'https://avatars.githubusercontent.com/u/32240906?v=4',
    };
  } catch (error) {
    console.log('API error: ' + error);
    return { err: error };
  }
};
