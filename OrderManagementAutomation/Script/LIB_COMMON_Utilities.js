/*
* Class: LIB_COMMON_Utilities.js
* Ingroup L3 - Common and Support Functions
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Copyright (c) 2024, Capgemini Engineering. All Rights reserved.
*
* Purpose: This file contains reusable utility functions to support various test operations, 
*          such as checking object visibility and interacting with table data.
*/

var MAP_ORDERS = require("MAP_ORDERS");
var uiObject = MAP_ORDERS.MAP_Orders();

/** ------------- Utility Functions for Data Validation and Checking ------------- **/

/**
 * Checks if an object has no properties (is empty).
 * @param {Object} obj - The object to check.
 * @return {boolean} - Returns true if the object is empty, otherwise false.
 */
function LIB_COMMON_Utilities_IsEmptyObject(obj) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * Checks if a variable is null, undefined, or an empty string.
 * @param {*} variable - The variable to check.
 * @return {boolean} - Returns true if the variable is empty or undefined.
 */
function LIB_COMMON_Utilities_IsEmptyVar(variable) {
    return variable === null || variable === undefined || variable === '';
}

/**
 * Checks if a given object is empty or null.
 * @param {Object} obj - The object to check.
 * @return {boolean} - Returns true if the object is empty or null.
 */
function LIB_COMMON_Utilities_IsEmpty(obj) {
    if (typeof obj == 'object') {
        return LIB_COMMON_Utilities_IsEmptyObject(obj);
    } else {
        return LIB_COMMON_Utilities_IsEmptyVar(obj);
    }
}



/**
 * Clicks the Save button in the Save As dialog.
 */
function LIB_COMMON_FileUtils_ClickSaveButton() {
    try {
        var saveButton = Aliases.Orders.dlgSaveAs.btnSave;
        saveButton.ClickButton();
        Log.Message("Clicked Save button in Save As dialog.");
    } catch (error) {
        Log.Error("Save button not found: " + error.message);
    }
}



/**
 * Confirms the file overwrite if the confirmation dialog appears.
 */
function LIB_COMMON_FileUtils_ConfirmOverwrite() {
    var confirmDialog = Aliases.Orders.dlgConfirmSaveAs;
    if (confirmDialog.Exists) {
        confirmDialog.Confirm_Save_As.CtrlNotifySink.btnYes.ClickButton();
        Log.Message("Confirmed file overwrite in Save As dialog.");
    } else {
        Log.Warning("Confirmation dialog not found, skipping overwrite confirmation.");
    }
}

/** ------------- Utility Functions for Application Management ------------- **/

/**
 * Opens the Orders application if it's not already open.
 */
function LIB_COMMON_Utilities_OpenApp() {
    try {
        if (!Aliases.Orders.Exists && !Sys.WaitProcess("Orders", 5000).Exists) {
            TestedApps.Orders.Run();
            Log.Message("Application started.");

            if (Aliases.Orders.WaitProperty("Exists", true, 10000)) {
                Log.Message("Application is ready for testing.");
            } else {
                Log.Error("Failed to open the application within the timeout.");
            }
        } else {
            Log.Warning("Application is already open.");
        }
    } catch (e) {
        Log.Error("An error occurred while trying to open the application: " + e.message);
    }
}

/**
 * Closes the Orders application.
 */
function LIB_COMMON_Utilities_CloseApp(appName) {
    var process = Sys.Process(appName);

    if (process.Exists) {
        var mainForm = process.WinFormsObject("MainForm");
        mainForm.Close(0);

        var confirmationDialog = Aliases.Orders.dlgConfirmation;
        if (confirmationDialog.Exists) {
            Log.Message("Confirmation dialog detected. Selecting 'Yes' to save changes.");
            confirmationDialog.btnYes.Click();
            Aliases.Orders.dlgSaveAs.btnSave.Click();
        }

        while (process.Exists) {
            Delay(100);
        }

        Log.Message("Orders application has been closed successfully with changes saved.");
    } else {
        Log.Warning("Orders application was not found.");
    }
}

/**
 * Ensures that the application is fully closed.
 * @param {string} appName - The name of the application to verify closure.
 */
function LIB_COMMON_Utilities_EnsureAppIsClosed(appName) {
    if (!Sys.WaitProcess(appName, 1000).Exists) {
        Log.Message("Application is confirmed as closed: " + appName);
    } else {
        Log.Warning("Application is still running: " + appName);
    }
}

/** ------------- Utility Functions for Object Interaction and Visibility ------------- **/

/**
 * Checks if a given object exists and is visible on the screen.
 * @param {Object} obj - The TestComplete object to check.
 * @returns {boolean} - Returns true if the object exists and is visible, otherwise false.
 */
function LIB_COMMON_Utilities_IsObjectVisible(obj) {
    try {
        if (obj.Exists && obj.VisibleOnScreen) {
            Log.Message("Object is visible: " + obj.FullName);
            return true;
        } else {
            Log.Warning("Object is not visible or does not exist: " + obj.FullName);
            return false;
        }
    } catch (error) {
        Log.Error("Error checking object visibility: " + error.message);
        return false;
    }
}

/**
 * Waits for a mapped object to be available.
 * @param {string} alias - Alias of the mapped object.
 * @param {number} timeout - Maximum time to wait in milliseconds.
 * @returns {object|null} - Returns found object or null if not found.
 */
function LIB_COMMON_Utilities_WaitForObject(alias, timeout) {
    var obj = eval(alias);
    if (obj.WaitProperty("Exists", true, timeout)) {
        return obj;
    } else {
        Log.Warning("Object not found within timeout: " + alias);
        return null;
    }
}

/** ------------- Utility Functions for Data Interaction in OrdersView ------------- **/

/**
 * Retrieves the data for a specific row based on the Customer Name.
 * @param {Object} tableObject - The OrdersView object.
 * @param {string} customerName - The customer name to locate the row.
 * @returns {Array} - Returns an array with the data of the matched row, or an empty array if not found.
 */
function GetOrderRowByCustomerName(tableObject, customerName) {
    var rowCount = tableObject.wItemCount;
    var columnCount = tableObject.wColumnCount;
    var rowData = [];

    for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        var cellValue;
        try {
            cellValue = tableObject.wItem(rowIndex, 0);
        } catch (error) {
            Log.Error("Unable to access cell value with wItem. Error: " + error.message);
            return [];
        }

        if (cellValue === customerName) {
            for (var colIndex = 0; colIndex < columnCount; colIndex++) {
                try {
                    rowData.push(tableObject.wItem(rowIndex, colIndex));
                } catch (error) {
                    Log.Error("Unable to access cell value at row " + rowIndex + ", column " + colIndex + ". Error: " + error.message);
                    return [];
                }
            }
            Log.Message("Captured Row Data: " + JSON.stringify(rowData));
            return rowData;
        }
    }

    Log.Warning("No row found for Customer Name: " + customerName);
    return rowData;
}




/**
 * Deletes the first order in OrdersView.
 */
function LIB_COMMON_DeleteFirstOrder() {
    var ordersApp = Aliases.Orders;
    var mainForm = ordersApp.MainForm;
    var ordersView = mainForm.OrdersView;

    if (ordersView.wItemCount > 0) {
        ordersView.ClickItem(0); // Select the first order
        mainForm.ToolBar.ClickItem(6, false); // Click delete button in the toolbar

        var confirmationDialog = ordersApp.dlgConfirmation;
        confirmationDialog.btnYes.ClickButton(); // Confirm deletion

        Log.Message("First order deleted successfully.");
    } else {
        Log.Warning("No orders found in OrdersView to delete.");
    }
}



/** ------------- Module Exports ------------- **/

module.exports = {
    LIB_COMMON_Utilities_OpenApp,
    LIB_COMMON_Utilities_WaitForObject,
    LIB_COMMON_Utilities_IsObjectVisible,
    LIB_COMMON_Utilities_CloseApp,
    LIB_COMMON_Utilities_EnsureAppIsClosed,
    LIB_COMMON_Utilities_IsEmptyObject,
    LIB_COMMON_Utilities_IsEmptyVar,
    LIB_COMMON_Utilities_IsEmpty,
    GetOrderRowByCustomerName,
    LIB_COMMON_DeleteFirstOrder,
    LIB_COMMON_FileUtils_ClickSaveButton,
    LIB_COMMON_FileUtils_ConfirmOverwrite,
    
    
};
