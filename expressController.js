"use stric"

const express = require('express');
let Users = require("../business/users.service.js").Users;
const readFile = require("../data/readFile.js").File;
let app = express()
let bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/showladies', function(req,res){
	const _users = new Users(readFile);
	_users.getLadies().then(function(data){
		res.status(200).send(data)
	},function(err){
		res.send(err)
	});
})

app.post('/api/saveUserProfile', function(req,res){
	let doSomething = "True data";

	console.log(req.body);
	res.status(200).send(doSomething)
})

app.post('/api/savePictureProfile', function(req,res){
	let doSomething = "picture";

	console.log(req.body);
	res.status(200).send(doSomething)
})

app.listen(3700, function(){
	console.log("server running")
})


// crear nuevo endPoint con POST llamado "saveUserProfile"
// visualizar info mostrar en consola de server
// regrersar status 200 
// send data true 
