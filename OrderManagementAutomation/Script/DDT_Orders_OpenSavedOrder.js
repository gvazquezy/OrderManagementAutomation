/*
* Class: DDT_Orders_OpenSavedOrder.js
* Ingroup: L0 - DDT Test Cases
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Purpose: Data-driven test case to open a previously saved order.
*/

var OrdersActions = require("OrdersActions");

/**
 * Data-Driven Test Case: Open Saved Order
 */
function DDT_Orders_OpenSavedOrder() {
    Log.Message("Attempting to open a previously saved order...");

    // Open a previously saved order using the path specified in Project Variables
    OrdersActions.OrdersActions_OpenSavedOrder(Project.Variables.nameTBL);

    Log.Message("Saved order opened successfully if file exists and format is correct.");
}

module.exports = DDT_Orders_OpenSavedOrder;
