/*
* Class: DDT_Orders_SaveOrder.js
* Ingroup: L0 - DDT Test Cases
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Purpose: Data-driven test case to save the current order if data is present.
*/

var OrdersActions = require("OrdersActions");

/**
 * Data-Driven Test Case: Save Current Order
 */
function DDT_Orders_SaveOrder() {
    Log.Message("Attempting to save the current order...");

    // Save the current order if data is present in the form
    OrdersActions.OrdersActions_SaveOrder();

    Log.Message("Order saved successfully if data was present.");
}

module.exports = DDT_Orders_SaveOrder;
