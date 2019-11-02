var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootcamp",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    menu();
});


function menu() {
    inquirer
        .prompt({
            name: "menu",
            type: "list",
            message: "Main Menu",
            choices: ['Look the Items', 'Place an Order', 'Track your Order', 'Exit']
        })
        .then(function (answer) {

            if (answer.menu === 'Look the Items') {
                amazonDataBase();
            } else if (answer.menu === "Place an Order") {
                placeAnOrder();
            } else if (answer.menu === 'Track your Order') {
                trackYourOerder();
            } else if (answer.menu === 'Exit') {
                connection.end();
            }
        });
}
function amazonDataBase() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("------------------------------------------------------");
        console.log("Item ID | Product | Departmemnt | Price | Stock ");
        console.log("------------------------------------------------------");
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(
                res[i].item_id + " | " +
                res[i].product_name + " | " +
                res[i].department_name + " | " + "$" +
                res[i].price + " | " +
                res[i].stock_quantity);
        }
        console.log("------------------------------------------------------");
        menu();

    });
}
function placeAnOrder() {
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What is the item ID you would like to purchase?"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units of the product you would like to purchase?",
            }
        ])
        .then(function (answer) {

            connection.query("SELECT item_id FROM products", function (err, res) {
                if (err) throw err;
                console.log(res);
                connection.end();
            });



        });
}