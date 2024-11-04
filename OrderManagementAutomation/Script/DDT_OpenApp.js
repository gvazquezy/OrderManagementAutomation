/*
* Class: DDT_Orders_CreateNewOrder.js
* Ingroup: L0 - DDT Test Cases
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Purpose: Data-driven test case to open the App.
*/

var OrdersActions = require("OrdersActions");

// This function opens the order management application using the OpenApp method from the OrdersActions module.
function OpenApp() {
  OrdersActions.OpenApp();
}
