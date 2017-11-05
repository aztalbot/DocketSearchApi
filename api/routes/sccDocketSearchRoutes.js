'use strict';
module.exports = function(app) {
  const axios = require("axios");
  const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";    
  var docketSearch = require('../controllers/sccDocketSearchController');

  app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  
  // DocketSearch Routes
  app.route('/search/:query')
    .get(function (req, res) {
        var axiosResp = {};
        axios
            .get(url)
            .then(response => {
                res.send(response.data.results) 
                console.log(
                `City: ${response.data.results[0].formatted_address} -`,
                `Latitude: ${response.data.results[0].geometry.location.lat} -`,
                `Longitude: ${response.data.results[0].geometry.location.lng}`
                );
                axiosResp =  `City: ${response.data.results[0].formatted_address} -`,
                `Latitude: ${response.data.results[0].geometry.location.lat} -`,
                `Longitude: ${response.data.results[0].geometry.location.lng}`;
            })
        .catch(error => {
            console.log(error);
        })
        // res.send('Get random books ' + req.params.query)
    })
    // .post(docketSearch.save_search);
    // .delete(docketSearch.delete_saved_search);

//   app.route('/cases/:caseNo')
//     // .get(docketSearch.get_case)
//     return { results: 'The results would go here!' }    
//     // .delete(docketSearch.delete_saved_case);
};