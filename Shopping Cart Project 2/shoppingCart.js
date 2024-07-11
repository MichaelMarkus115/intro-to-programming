let nums = [1, 2, 3, 4];
let items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
let prices = [7.5, 9.5, 8.5, 7.5];
let quantities = [0, 0, 0, 0];
let totals = [0.0, 0.0, 0.0, 0.0];
let totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
};

function remove_Selection(x) {
    console.log(x);
    if (quantities[x] > 0) {
        quantities[x] -= 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];
    };

    display_all();
};

//checkout button function
function checkout() {
    alert("Your total order amount is: R" + totalOrderAmt);
};

 


function display_all() {



    let myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_Selection(" + i + ")'>Remove</button></td>";
    };

    myTable += "</table>";
        



    // document.write(myTable);
    myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";

    //checkout button
    myTable += "<br/><td><button onclick='checkout()'>Checkout</button></td>"
    document.getElementById("demo").innerHTML = myTable;


};

window.onload = function() {
    display_all();
}