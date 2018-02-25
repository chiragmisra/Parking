// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs = require("fs");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json());


var port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.post('/store', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
    console.log("request : "+ JSON.stringify(req.body));
    fs.writeFile( "filename.json", JSON.stringify( req.body ), "utf8", function(error) {if(error){console.log('[write auth]: ' + err);}});   
});

router.get('/display', function(req, res) {
    fs.readFile("./filename.json", "utf8", 
    	function(err, data) { 
    		if(err){console.log('[write auth]: ' + err)};
    		res.json(JSON.parse(data))});
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);