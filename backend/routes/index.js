const { response } = require('express');
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const axios = require('axios')

async function getPRs(username, callback) {
  try {
    let ar_PR = [];

    const response = await fetch(`https://api.github.com/search/issues?q=author:${username}+created:>2020-09-29+type:pr`)
    const data = await response.json()
    var t = data.items.length
    var item = data.items;
    if(t===0){
      console.log("No pull request made in this month")
      const response1=await fetch(`https://api.github.com/users/${username}`)
      const data1=await response1.json()
      console.log(data1)
      callback(ar_PR,data1.avatar_url,true)
    }
    else{
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
        pr_url: item[i].html_url,
        repo_name: item[i].html_url.substring(item[i].html_url.indexOf('/', 18) + 1, item[i].html_url.lastIndexOf('/', item[i].html_url.lastIndexOf('/') - 1)),
        repo_url: item[i].html_url.substring(0, item[i].html_url.lastIndexOf('/', item[i].html_url.lastIndexOf('/') - 1)),
        topic_bool,
        label_bool,
        state: item[i].state,
        created_at: item[i].created_at
      })
    }
  
    callback(ar_PR, item[0].user.avatar_url,false)
  }
  } catch (error) {
    console.log('API error: ' + error)
    
  }
}

router.post('/', (req, res) => {
  console.log(req.body)
  getPRs(req.body.uname, (cb, userimg,noprs) => {
    if (cb.length)
      res.json({
      	cb: cb,
        user_img: userimg,
        noprs:noprs
      })
    else
      res.json({user_img:userimg,
        noprs:noprs})
  })

})

module.exports = router;
