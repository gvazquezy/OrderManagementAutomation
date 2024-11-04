/*
* Class: Verify_Orders_Actions.js
* Ingroup: Business Actions
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Copyright (c) 2024, Capgemini Engineering. All rights reserved.
*
* Purpose: This file contains business actions to verify the Orders application actions
*          (New, Save, Check, Delete, Generate Report) performed in the Orders App.
*/

var orders_mainForm = require("FUNC_Orders_MainForm");
var orders_orderForm = require("FUNC_Orders_OrdersForm");
var reportFunctions = require("FUNC_Orders_GenerateReport");
var fileUtils = require("LIB_COMMON_FileUtilities");

/**
 * Opens the New Order form by clicking the corresponding toolbar item.
 */
function OrdersActions_OpenTheNewOrderForm() {
    orders_mainForm.FUNC_Orders_MainForm_ClickOnToolbarItem(4);
}

/**
 * Opens the Edit Order form by selecting the specified toolbar item.
 */
function OrdersActions_OpenEditOrderForm() {
    orders_mainForm.FUNC_Orders_MainForm_ClickOnToolbarItem(5);
}

/**
 * Verifies that an order deletion was successfully performed.
 */
function OrdersActions_VerifyOrderDeletion() {
    orders_mainForm.FUNC_Orders_MainForm_VerifyDeletion();
}

/**
 * High-level action to generate a customer report and validate that it is saved.
 * @param {string} filePath - The path where the report should be saved.
 */
function OrdersActions_GenerateAndSaveCustomerReport(filePath) {
   Log.Message("Starting report generation process...");

    // Calls the L2 function to generate and validate the report file
    reportFunctions.FUNC_Orders_GenerateCustomerListReport(filePath);

    Log.Message("Report generation process completed.");
}

/**
 * Deletes the first order in the Orders list.
 */
function OrdersActions_DeleteFirstOrder() {
    orders_mainForm.FUNC_Orders_MainForm_DeleteFirstOrder();
}

/**
 * Fills the form with data for a new order.
 */
function OrdersActions_FillTheNewOrderFormData(product, quantity, price, discount, total, date, customerName, street, city, state, zip, cardType, cardNo, expirationDate) {
    orders_orderForm.FUNC_Orders_OrdersForm_FillNewOrderData(product, quantity, price, discount, total, date, customerName, street, city, state, zip, cardType, cardNo, expirationDate);
}

/**
 * Saves the entered order data by clicking the OK button.
 */
function OrdersActions_SaveTheOrderData() {
    orders_orderForm.FUNC_Orders_OrdersForm_SaveOrderData();
}

/**
 * Verifies that the specified order values match the expected data in the Orders table.
 */
function Verify_OrdersActions_OrderValues(customerName, product, quantity, date, street, city, state, zip, cardType, cardNo, expirationDate) {
    orders_mainForm.FUNC_Orders_MainForm_VerifyTheOrdersTableValues(customerName, product, quantity, date, street, city, state, zip, cardType, cardNo, expirationDate);
}

/**
 * Closes the Orders application.
 */
function OrdersActions_CloseTheOrdersApp() {
    orders_mainForm.FUNC_Orders_MainForm_CloseTheAPP();
}


/**
 * Creates a new order by clicking the New Order toolbar button.
 */
function OrdersActions_CreateNewOrder() {
    orders_mainForm.FUNC_Orders_MainForm_ClickNewOrder();
}


/**
 * Saves the current order if there is data present.
 */
function OrdersActions_SaveOrder() {
    if (orders_mainForm.FUNC_Orders_MainForm_CheckIfDataExists()) {
        orders_mainForm.FUNC_Orders_MainForm_ClickSaveOrder();
        fileUtils.LIB_COMMON_FileUtils_ClickSaveButton();
    } else {
        Log.Warning("No data to save.");
    }
}


/**
 * Opens a saved order from the specified file path.
 * @param {string} filePath - Path of the saved order file.
 */
function OrdersActions_OpenSavedOrder(filePath) {
    orders_mainForm.FUNC_Orders_MainForm_ClickOpenOrder();
    fileUtils.LIB_COMMON_FileUtils_OpenFileDialog(filePath);
}


// Exporting all business action functions
module.exports = {
    OrdersActions_OpenTheNewOrderForm,
    OrdersActions_OpenEditOrderForm,
    OrdersActions_FillTheNewOrderFormData,
    OrdersActions_SaveTheOrderData,
    Verify_OrdersActions_OrderValues,
    OrdersActions_CloseTheOrdersApp,
    OrdersActions_VerifyOrderDeletion,
    OrdersActions_DeleteFirstOrder,
    OrdersActions_GenerateAndSaveCustomerReport,
    OrdersActions_CreateNewOrder,
    OrdersActions_SaveOrder,
    OrdersActions_OpenSavedOrder
};
