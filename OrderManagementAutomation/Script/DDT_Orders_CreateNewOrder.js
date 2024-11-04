/*
* Class: DDT_Orders_CreateNewOrder.js
* Ingroup: L0 - DDT Test Cases
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Purpose: Data-driven test case to create a new order.
*/

var OrdersActions = require("OrdersActions");

/**
 * Data-Driven Test Case: Create New Order
 */
function DDT_Orders_CreateNewOrder() {
    Log.Message("Starting the creation of a new order...");

    // Call the function to create a new order from L1
    OrdersActions.OrdersActions_CreateNewOrder();

    Log.Message("New order created successfully.");
}

module.exports = DDT_Orders_CreateNewOrder;
