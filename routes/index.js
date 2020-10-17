const { response } = require('express');
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const axios = require('axios')

let ar_PR = [];

router.get('/', (req, res) => {
  var clientId = 'c55d4f3e951937805749'
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${clientId}`);
});

router.get('/login', (req, res) => {
  const body = {
    client_id: 'c55d4f3e951937805749',
    client_secret: 'afd3d3cc7e82d501dca6033e6eee231da82900ab',
    code: req.query.code
  };
  const opts = { headers: { accept: 'application/json' } };
  axios.post(`https://github.com/login/oauth/access_token`, body, opts).
    then(res => res.data['access_token']).
    then(_token => {
      console.log('My token:', _token);
      res.json({ ok: 1 });
    }).
    catch(err => res.status(500).json({ message: err.message }));
});

async function getPRs(callback) {
  try {
    const response = await fetch('https://api.github.com/search/issues?q=author:genialkartik+created:>2020-09-29+type:pr')
    const data = await response.json()
    var t = data.items.length
    var item = data.items;
    console.log(t)
    for (var i = 0; i < t; i++) {
      var _label = item[i].labels.find(e => e.name == 'hacktoberfest-accepted')
      let label_bool = _label ? true : false
      const user_repo_res = await fetch(item[i].repository_url + '/topics',
        {
          method: "GET",
          headers: {
            Accept: "application/vnd.github.mercy-preview+json",
            Authorization: 'token ee8a590676c13ab98ed25693da8a0fd4281dc0cb'
          }
        })
      const user_data = await user_repo_res.json()
      var _topic = user_data.names.find(e => e == 'hacktoberfest')
      let topic_bool = _topic ? true : false

      ar_PR.push({
        title: item[i].title,
        html_url: item[i].html_url,
        repo_url: item[i].repository_url,
        topic_bool,
        label_bool,
        state: item[i].state,
        created_at: item[i].created_at
      })
    }
    callback(ar_PR)
  } catch (error) {
    console.log('API error: ' + error)
    callback([])
  }
}

router.get('/user/:username', (req, res) => {
  getPRs(cb => {
    res.send(cb)
  })

})



module.exports = router;

