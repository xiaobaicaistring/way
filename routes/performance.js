var express = require('express');
var router = express.Router();
var redis = require("redis");
var client = redis.createClient();

client.on("error", function (err) {
  console.log("Error " + err);
});

/* GET home page. */
// ei: front_performance_base
// et: 1554199583097
// etp: inn
// ep: {"startTime":1554199581965,"lookupDomainTime":0,"connectTime":25,"requestTime":152,"networkTime":183,"domReadyTime":1088,"firstPaintTime":188}
router.get('/', function(req, res, next) {
  console.log(req.query.ep)
  var data = req.query.ep
  client.lpush('logstash', data)
  res.send('success');
});

module.exports = router;
