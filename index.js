const express = require('express');
const path = require('path');
//const generatePassword = require('password-generator');

const app = express();

// ### moved this into production below
// Serve static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));


// lets see if post can work

//var router = express.Router();

const port = process.env.PORT || 5000;


app.post("/api/riskratios", function(req, res) {

console.log(req.body);

let thresholds = [true,true,true];

res.send(thresholds);




/*



// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
  
  */
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
//app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname+'/client/build/index.html'));
//});


app.listen(port);

console.log(`DataTwin listening on ${port}`);