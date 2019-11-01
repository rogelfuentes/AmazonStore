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
    purchase();
});


function purchase() {
    inquirer
        .prompt({
            name: "find",
            type: "list",
            message: "Main Menu:",
            choices: ['Look the Items', 'Place an Order', 'Track ypour Order']
        })
        .then(function (answer) {

            if (answer.find === 'Look the Items') {
                amazonDataBase();
            } else if (answer.postOrBid === "BID") {
                bidAuction();
            } else {
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
        purchase();

    });
}
