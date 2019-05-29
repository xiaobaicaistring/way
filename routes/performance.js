var express = require('express');
var router = express.Router();
var kafka = require('kafka-node');
var Producer = kafka.Producer;
var client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
var producer = new Producer(client);

client.on("error", function (err) {
  console.log("Error " + err);
});

/* GET home page. */
// ei: front_performance_base
// et: 1554199583097
// etp: inn
// ep: {"startTime":1554199581965,"lookupDomainTime":0,"connectTime":25,"requestTime":152,"networkTime":183,"domReadyTime":1088,"firstPaintTime":188}
router.get('/', function(req, res, next) {
  // client.lpush('logstash', dreq.query.ep)
  var payloads = [
    { topic: 'topic1', messages: 'hi', partition: 0 },
    { topic: 'topic2', messages: ['hello', 'world', km] }
  ];
  producer.send(payloads, function (err, data) {
    console.log(err)
    console.log(data);
  });
  res.send('success');
});

module.exports = router;
