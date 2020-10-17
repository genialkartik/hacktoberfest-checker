const { response } = require('express');
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', {
  //   title: 'Express',
  //   date: new Date(Date.parse('2020-10-13T18:27:05Z')).toUTCString()
  // });
  fetch("https://api.github.com/repos/genialkartik/Blog-Socketio/topics",
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.name)
      var _t = data.name.find((e => e == 'hacktoberfest'))
      res.send(_t ? true : false)
    })
});

// https://api.github.com/search/issues?q=author%3Agenialkartik+type%3Apr
async function getTopics(repo_url) {
  const user_repo_res = await fetch(repo_url + '/topics',
    {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      }
    })
  const user_data = await user_repo_res.json()
  var _topic = user_data.name.find(e => e == 'hacktoberfest')
  return (_topic ? true : false)
}

async function getPRs(callback) {
  try {
    let ar_PR = [];
    const response = await fetch('https://api.github.com/search/issues?q=author:genialkartik+created:>2020-09-29+type:pr')
    const data = await response.json()
    data.items.map(({ repository_url, html_url, title, labels, state, created_at }) => {
      var _label = labels.find(e => e.name == 'hacktoberfest-accepted')
      let label_bool = _label ? true : false
      var cb = getTopics(repository_url)
      console.log(cb)
      ar_PR.push({
        title,
        html_url,
        repository_url,
        cb,
        label_bool,
        state,
        created_at
      })
    })
    callback(ar_PR)
  } catch (error) {
    console.log('API error: ' + error)
    callback([])
  }
}

router.get('/:username', (req, res) => {
  getPRs(cb => {
    res.send(cb)
  })

})



module.exports = router;

// Client ID
//     85fb922b08a0b9bb0496
// Client Secret
//     2ebf230e6396c7fa226d304892ea7771c63ffce3

