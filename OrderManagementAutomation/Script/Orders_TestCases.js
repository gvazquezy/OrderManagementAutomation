/*
* Class: Orders_AddOrderTest.js
* Ingroup Orders Test Cases.
* Author: Gonzalo.
* Since: 2024/10/29.
* Purpose: Test case for adding a new order.
*/

function Test_AddOrder() {
    // Input data for the test case
    var customerName = "Test Customer";
    var productName = "Product X";
    var price = 10;
    var quantity = 2;

    // Calls the business function to add a new order
    OrdersActions.AddNewOrder(customerName, productName, price, quantity);
}
