/*
* Class: FUNC_Orders_MainForm.js
* Ingroup L2 - Project Functions
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Copyright (c) 2024, Capgemini Engineering. All Rights reserved.
*
* Purpose: This file contains functions to interact with the main form of the Orders application,
*          including opening the app, clicking toolbar items, verifying order data, and closing the app.
*/

// Import necessary dependencies
var MAP_ORDERS = require("MAP_ORDERS");
var commonFunctions = require("LIB_COMMON_Utilities");
var tableFunctions = require("LIB_COMMON_TableUtilities");
var validateFunctions = require("LIB_COMMON_Validations");

// Initialize UI objects
var uiObject = MAP_ORDERS.MAP_Orders();

/** ------------------------- Application Interaction Functions ------------------------- **/

/**
 * Opens the Orders application if it is not already open.
 */
function FUNC_Orders_MainForm_OpenTheAPP() {
    commonFunctions.LIB_COMMON_Utilities_OpenApp();
}

/**
 * Closes the Orders application.
 */
function FUNC_Orders_MainForm_CloseTheAPP() {
    commonFunctions.LIB_COMMON_Utilities_CloseApp("Orders");
}

/** ------------------------- Toolbar Interaction Functions ------------------------- **/

/**
 * Clicks a specific toolbar item based on the provided index.
 * @param {number} index - The index of the toolbar item to click.
 */
function FUNC_Orders_MainForm_ClickOnToolbarItem(index) {
    try { 
        var toolbar = eval(uiObject["tbar_main_toolbar"]);
        
        if (toolbar && toolbar.Exists) {
            toolbar.ClickItem(index, false);
            Log.Message("Successfully clicked toolbar item at index: " + index);
        } else {
            Log.Error("Toolbar object does not exist. Cannot click item.");
        }
    } catch (error) {
        Log.Error("Failed to click on toolbar item at index: " + index + ". Error: " + error.message);
    }
}

/** ------------------------- Order Table Validation Functions ------------------------- **/

/**
 * Verifies the values in the Orders table for a specific order.
 * @param {string} CustomerName - Expected customer's name.
 * @param {string} product - Expected product name.
 * @param {number} quantity - Expected quantity.
 * @param {string} date - Expected date.
 * @param {string} street - Expected street address.
 * @param {string} city - Expected city.
 * @param {string} state - Expected state.
 * @param {string} zip - Expected zip code.
 * @param {string} cardType - Expected card type.
 * @param {string} cardNo - Expected card number.
 * @param {string} expirationDate - Expected expiration date.
 */
function FUNC_Orders_MainForm_VerifyTheOrdersTableValues(CustomerName, product, quantity, date, street, city, state, zip, cardType, cardNo, expirationDate) {
    var tableObject = eval(uiObject["tbl_main_ordersView"]);
    var isTableVisible = commonFunctions.LIB_COMMON_Utilities_IsObjectVisible(tableObject);
    
    if (!isTableVisible) {
        Log.Error("The Orders table view is not visible or accessible.");
        return;
    }

    // Expected and actual data arrays
    var expectedData = [CustomerName, product, quantity, date, street, city, state, zip, cardType, cardNo, expirationDate];
    var actualData = commonFunctions.GetOrderRowByCustomerName(tableObject, CustomerName);

    // Validate matching data
    validateFunctions.LIB_COMMON_ValidateArrays(actualData, expectedData, "Actual order data matches", "Actual order data does not match");

    // Check for blank fields
    for (var i = 0; i < actualData.length; i++) {
        if (actualData[i] === "" || actualData[i] === null || actualData[i] === undefined) {
            Log.Error(`Field ${expectedData[i]} is blank. Please provide a value.`);
        }
    }

    // Validation for numeric fields
    var numericFields = {
        "quantity": actualData[2], // Assuming quantity is at index 2
        "zip": actualData[7],      // Assuming zip is at index 7
        "cardNo": actualData[9]    // Assuming cardNo is at index 9
    };

    for (var field in numericFields) {
        if (numericFields[field] === "" || numericFields[field] === null || numericFields[field] === undefined) {
            Log.Error(`Field ${field} is blank. Please provide a numeric value.`);
        } else if (isNaN(numericFields[field])) {
            Log.Error(`Field ${field} has an invalid value (not numeric): ${numericFields[field]}`);
        } else {
            Log.Message(`Field ${field} is valid and numeric: ${numericFields[field]}`);
        }
    }
}

/**
 * Checks if there are any orders present in the Orders view.
 */
function FUNC_Orders_MainForm_ExitOrders() {
    var ordersView = eval(uiObject["tbl_main_ordersView"]);
    validateFunctions.LIB_COMMON_Validations_CheckIfOrdersExist(ordersView);
}



/**
 * Deletes the first order in OrdersView and verifies the deletion.
 */
function FUNC_Orders_MainForm_DeleteFirstOrder() {
    commonFunctions.LIB_COMMON_DeleteFirstOrder(); // Call delete function from L3 utilities
}



/**
 * Verifies that the first order has been deleted.
 */
function FUNC_Orders_MainForm_VerifyDeletion() {
    var ordersView = Aliases.Orders.MainForm.OrdersView;
    var initialItemCount = ordersView.wItemCount;

    if (initialItemCount > 0) {
        Log.Message("Number of orders before deletion: " + initialItemCount);

        // Call delete function from common utilities
        commonFunctions.LIB_COMMON_DeleteFirstOrder();

        Delay(1000); // Wait for the list to update

        var newItemCount = ordersView.wItemCount;

        if (newItemCount === initialItemCount - 1) {
            Log.Checkpoint("Order deleted successfully. Orders remaining: " + newItemCount);
        } else {
            Log.Error("Order was not deleted. Expected count: " + (initialItemCount - 1) + ", Actual: " + newItemCount);
        }
    } else {
        Log.Warning("No orders found in OrdersView to delete.");
    }
}



/**
 * Clicks the New Order button on the toolbar.
 */
function FUNC_Orders_MainForm_ClickNewOrder() {
    Aliases.Orders.MainForm.ToolBar.ClickItem(0, false);
    Log.Message("New order creation initiated.");
}

/**
 * Clicks the Open Order button on the toolbar.
 */
function FUNC_Orders_MainForm_ClickOpenOrder() {
    Aliases.Orders.MainForm.ToolBar.ClickItem(1, false);
    Log.Message("Open saved order dialog initiated.");
}

/**
 * Clicks the Save Order button on the toolbar.
 */
function FUNC_Orders_MainForm_ClickSaveOrder() {
   Aliases.Orders.MainForm.ToolBar.ClickItem(2, false);
   
    Log.Message("Save order initiated.");
}

/**
 * Checks if there is any data in the OrdersView.
 * @returns {boolean} - True if there is data, false otherwise.
 */
function FUNC_Orders_MainForm_CheckIfDataExists() {
    return Aliases.Orders.MainForm.OrdersView.wItemCount > 0;
}

/** ------------------------- Exported Functions ------------------------- **/

module.exports = {
    FUNC_Orders_MainForm_OpenTheAPP,
    FUNC_Orders_MainForm_ClickOnToolbarItem,
    FUNC_Orders_MainForm_VerifyTheOrdersTableValues,
    FUNC_Orders_MainForm_CloseTheAPP,
    FUNC_Orders_MainForm_ExitOrders,
    FUNC_Orders_MainForm_DeleteFirstOrder,
    FUNC_Orders_MainForm_VerifyDeletion,
    FUNC_Orders_MainForm_ClickNewOrder,
    FUNC_Orders_MainForm_ClickOpenOrder,
    FUNC_Orders_MainForm_ClickSaveOrder,
    FUNC_Orders_MainForm_CheckIfDataExists
    
};
