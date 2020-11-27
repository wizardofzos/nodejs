// Some lame try at a node.js crash course...


var express=require('express');
var app=express();

// At some stage one would like a database
console.log("[!] No Database connection")

// Setup routes for (dynamic) endpoints
console.log("[+] Backend endpoints (API-CALLS)...");
app.get('/jsondata',function(req,res){
  var json = {};
  json['string-attribute'] = "string-value";
  json['int-attribute'] = 42;
  json['float-attribute'] = 6624977242.71828182845904/523536028747135270936999595749669676277;
  json['json-attribute'] = {"wtf" : "jsons in jsons?","yes": true, "no": false};
  json['list-attribute'] = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];


  res.send(json);
});
console.log("       - /jsondata");

app.get('/when', function(req,res){
  // stuff
  res.send(new Date());
});
console.log("       - /when");

// Let's have Express serve all from the /static folder
console.log("[+] Express static hosting from /static");
app.use('/static', express.static('static'));

// Make sure root (/) returns index.html
app.get('/', function (req, res){
	res.redirect(301, 'static/index.html');
});
console.log("       - /static/index.html as redirect");

// Startup Express
console.log("[.] Start Express on port 3000");
var server=app.listen(3000,function() {});
console.log("[+] Express started [3000]")

// Yikes!
