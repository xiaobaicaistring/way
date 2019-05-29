var express = require('express');
var router = express.Router();
var kafka = require('kafka-node');
var Producer = kafka.Producer;
var client = new kafka.Client('10.1.15.64:2181');
var producer = new Producer(client);

/* GET home page. */
// ei: front_performance_base
// et: 1554199583097
// etp: inn
// ep: {"startTime":1554199581965,"lookupDomainTime":0,"connectTime":25,"requestTime":152,"networkTime":183,"domReadyTime":1088,"firstPaintTime":188}
producer.on('ready', async function () {
  router.get('/', function(req, res, next) {
    var payloads = [
      { topic: 'test', messages: 'hi'},
      { topic: 'test', messages: ['hello', 'world', '666'] }
    ];
    
    producer.send(payloads, function (err, data) {
      console.log(err)
      console.log(data);
    }); 

    res.send('success');
  }); 
})

module.exports = router;
