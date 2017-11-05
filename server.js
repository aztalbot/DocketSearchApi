var uri = "mongodb://aztalbot:<Diana47Alderbashi>@docketsearchdata-shard-00-00-lox6k.mongodb.net:27017,docketsearchdata-shard-00-01-lox6k.mongodb.net:27017,docketsearchdata-shard-00-02-lox6k.mongodb.net:27017/test?ssl=true&replicaSet=DocketSearchData-shard-0&authSource=admin";

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
// mongoose = require('mongoose'),
  Search = require('./api/models/sccDocketSearchModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
// mongoose.createConnection(uri, {  useMongoClient: true  }); 

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

var routes = require('./api/routes/sccDocketSearchRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('SCC Docket Search  RESTful API server started on: ' + port);
