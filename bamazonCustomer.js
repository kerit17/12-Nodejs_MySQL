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
	display();
});

//function to display items for sale: ids, names, and prices
function display(){
	connection.query("SELECT * FROM products", function(err, res){
			if (err) throw err;
			console.table(res);

		inquirer
 			.prompt([
 				{
		 			name: "choice",
		       		type: "input",
		        	message: "What is the ID of the product you would like to purchase?"
        		},
        		{
					name: "number",
		       		type: "input",
		        	message: "How many items would you like to puchase?"
        		}
        	])
        	.then(function(answer){
        		var chosenItem;
        		for (var i=0; i < res.length; i++){
        				if(res[i].item_id === answer.choice){chosenItem = res[i];
        				}
        			}
        		//determine if quantity available
        		if(chosenItem.stock_quantity < parseInt(answer.number)){
        			console.log("Item(s) is/are available")//update database
        			connection.query("UPDATE products SET ? WHERE ?",[
        				{
        					stock_quantity: number
        				},
        				{
        					item_id: chosenItem
        				}],
        				function(error){
        					if (error) throw err;
        					console.log("Quantity puchased!");
        					display();
        				}
        			);	
        			}
        		else{
        			console.log("Insufficient Quantity! Please make another selection.");
        			display();
        		}
        	//closes the .then		
        		});
    })};