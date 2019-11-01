var mysql = require("mysql");
var inquirer = inquire("inquirer");

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
    amazonDataBase();
});

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
        purchase();
    });
}
function purchase() {
    inquirer
        .prompt({
            name: "find",
            type: "list",
            message: "What Item do you want to purchase?",
            choices: ['1', '2', '3', '4']
        })
        .then(function (answer) {

            if (answer.find === 'By Artist') {
                console.log('searching by artist...');
                byArtist();
            } else {
                connection.end();
            }
        });
}