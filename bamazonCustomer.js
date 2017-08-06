var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'bamazon_db'
});

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id " + connection.threadID + "\n");
	display();
});

//function to display items for sale: ids, names, and prices
function display(){
	connection.query("SELECT * FROM products", function(err, res){
		if (err) throw err;
			console.table(res);
	});


}