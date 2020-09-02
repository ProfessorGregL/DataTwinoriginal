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

var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";

var url = 'mongodb+srv://greg-user:iy1UDSJTrS4xOznh@cluster0.jo9wm.mongodb.net/datatwin1?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE';

processRatios = (ratios, thresholds) => {
    //console.log("ratios" + ratios);

    let riskyRatio = [false,false,false];

    if(ratios[0] > thresholds[0]){riskyRatio[0] = true;}
    if(ratios[1] > thresholds[1]){riskyRatio[1] = true;}
    if(ratios[2] > thresholds[2]){riskyRatio[2] = true;}

    console.log(riskyRatio);

    return riskyRatio;
}


app.post("/api/riskratios", function(req, res) {

console.log(req.body);

    MongoClient.connect(url,{ useUnifiedTopology: true } , function(err, db) {
        if (err) throw err; // todo change this to try catch

        var querystring = [req.body.numdependents.value,req.body.income.value,req.body.education.value].join(',');

        console.log("query string:" +  querystring)

        var dbo = db.db("datatwin1");
        dbo.collection("pva").find({params:querystring} ).toArray(function(err,result){
            if (err) throw err;  // todo change this to try catch
            let array = [String(result[0].ratio[0]),String(result[0].ratio[1]),String(result[0].ratio[2])];
            console.log(array);

            let thresholds = [1.8,1.8,1.8];
            //processRatios(array, thresholds);

            res.send(processRatios(array, thresholds));
            db.close();
        });
    });

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