var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    date: new Date(Date.parse('2020-10-13T18:27:05Z')).toUTCString()
  });
});

// https://api.github.com/search/issues?q=author%3Agenialkartik+type%3Apr

async function getPRs(callback) {
  try {
    let ar_PR = [];
    const response = await fetch('https://api.github.com/search/issues?q=author:genialkartik+created:>2020-09-28+type:pr')
    const data = await response.json()
    console.log(data.items)
    data.items.map(({ html_url, title, created_at }) => {
      ar_PR.push({
        title, html_url, created_at
      })
    })
    callback(ar_PR)
  } catch (error) {
    console.log('API error: ' + error)
    callback([])
  }
}

router.get('/:username', (req, res) => {
  // fetch('https://api.github.com/search/issues?q=author:genialkartik+created:>2020-09-28+type:pr')
  // .then(apires => apires.json())
  // .then(data => {
  //   data.items.map(({ html_url, title, state, body }) => {
  //     let ar_PR = {
  //       title, html_url, body, state
  //     }
  //   })
  // })
  getPRs(cb => {
    res.send(cb)
  })

})


module.exports = router;
