var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

var places = ['Library', 'Restaurant', 'Dog Park'];

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/places', function(req, res) {
  res.render('places', { places: places });
});

app.post('/addPlace', function(req, res) {
  var newPlace = req.body.newPlace;
  places.push(newPlace);
  res.redirect('/places');
});

app.listen(3000, function() {
  console.log('server started');
});
