var express = require('express');
var router = express.Router();
var request = require('request');

//Save bd
const low = require('lowdb');
const storage = require('lowdb/file-sync');
var db = low('db.json', { storage: storage });
//Format data
var cheerio = require('cheerio');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  var num = db('user').map('Submission');
  db('user')
      .chain()
      .find({ Submission: num[0] })
      .assign({ Submission: num[0]+1})
      .value();
});

router.post('/uvaid', function(req, res, next) {
  request('http://acm.hdu.edu.cn/showproblem.php?pid='+req.body.ques, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);
    }else{
      console.log(error);
    }
  });
});

module.exports = router;
