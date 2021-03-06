var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static('assets'));

var reservations = [
	{
		routeName:"Steve boy",
		phone: "512-111-1111",
		email: "steve@hotmail.com" , 
		uniqueID: 10 
	},
	{
		routeName:"Ash",
		phone: "512-101-1010",
		email: "ash@pokemon.com" , 
		uniqueID: 1 
	} 
];

var waitlist = [];

app.get("/", function (request, results){
	results.sendFile(path.join(__dirname, "home.html"));
})

app.get("/api/tables", function(request, results){
	results.json(reservations);
})

app.get("/api/waitlist", function(request,results){
	results.json(waitlist);
})

app.get("/table", function(request, results){
	results.sendFile(path.join(__dirname, "table.html"));
})

app.get("/reserve", function(request, results){
	results.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/api/:reservations?", function(request, results){
	var reservation = request.params.reservations;

	if (reservation){

		console.log(reservation);
		for (var i=0; i <reservations.length; i++){

			if (reservation == reservations[i].routeName){
				results.json(reservations[i]);
				return;
			}
		}

		results.json(false);
	}

	else{
		results.json(reservations);
	}
})


app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
})
