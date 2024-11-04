/*
* Class: LIB_COMMON_Validations.js
* Ingroup: L3 - Common and Support Functions
* Author: Gonzalo
* Since: 2024/10/29
* Copyright (c) 2024, Capgemini Engineering. All Rights reserved.
*
* Purpose: This file contains validation functions to ensure data integrity.
*/



/**
 * Validates that two arrays match exactly, logging appropriate messages.
 * @param {Array} actualArray - The array with actual values to validate.
 * @param {Array} expectedArray - The array with expected values to compare against.
 * @param {string} successMessage - Message to log if validation is successful.
 * @param {string} errorMessage - Message to log if validation fails.
 */
// Validates that two arrays have identical values
function LIB_COMMON_ValidateArrays(actualArray, expectedArray, successMessage, errorMessage) {
    if (actualArray.length !== expectedArray.length) {
        Log.Error("Array lengths do not match. Expected length: " + expectedArray.length + ", Actual length: " + actualArray.length);
        return;
    }
    
    for (var i = 0; i < actualArray.length; i++) {
        // Normalize both values by trimming spaces and converting to strings
        var actual = actualArray[i].toString().trim();
        var expected = expectedArray[i].toString().trim();
        
        if (actual !== expected) {
            Log.Error(`${errorMessage}. Mismatch at index ${i}. Expected: '${expected}', Actual: '${actual}'`);
            return;
        }
    }

    Log.Message(successMessage);
}



/**
 * Validates if there are any orders in the OrdersView table.
 * @param {Object} tableObject - The OrdersView object.
 * @returns {boolean} - Returns true if there are orders, false otherwise.
 */
function LIB_COMMON_Validations_CheckIfOrdersExist(tableObject) {
    if (tableObject && tableObject.Exists && tableObject.VisibleOnScreen) {
        var itemCount = tableObject.wItemCount;
        
        Log.Message("Number of items in OrdersView: " + itemCount);

        if (itemCount > 0) {
            Log.Message("Orders exist in OrdersView.");
            return true;
        } else {
            Log.Message("No orders found in OrdersView.");
            return false;
        }
    } else {
        Log.Warning("OrdersView object not found or not visible on the screen.");
        return false;
    }
}




module.exports = {
    LIB_COMMON_ValidateArrays,
    LIB_COMMON_Validations_CheckIfOrdersExist
};
