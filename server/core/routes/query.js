var express = require('express');
var router = express.Router();
var solr = require('../plugins/solr');
/* Query processing */
router.post('/', function(req, res, next) {
  console.log(JSON.stringify(req.body) );
  if(req.body.text)
  	solr("twitter",req.body.text,function(err, solrResponse){
  		console.log('inside this wala');
  		if(err)
  			res.send('error at solr');  		
  		res.send(solrResponse);
  	}) ;
  else
  	res.send('unknown provider');
});

module.exports = router;
