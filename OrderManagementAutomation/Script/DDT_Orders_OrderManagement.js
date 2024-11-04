/*
* Class: DDT_Orders_OrderManagement.js
* Ingroup: L0 - DDT Test Cases
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Purpose: Data-driven test case for creating, saving, and opening orders in the Orders application.
*/

var OrdersActions = require("OrdersActions");

/**
 * Data-Driven Test Case: Create, Save, and Open Orders
 */
function DDT_Orders_OrderManagement() {
    // Create a new order
    //OrdersActions.OrdersActions_CreateNewOrder();

    // Save the current order if data is present
    OrdersActions.OrdersActions_SaveOrder();

    // Open a previously saved order (with an accepted file format)
    OrdersActions.OrdersActions_OpenSavedOrder(Project.Variables.filePath2);
}

module.exports = DDT_Orders_OrderManagement;
