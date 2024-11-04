/*
* Class: LIB_COMMON_TableUtilities.js
* Ingroup: L3 - Common and Support Functions
* Author: Gonzalo
* Since: 2024/10/29
* Copyright (c) 2024, Capgemini Engineering. All rights reserved.
*
* Purpose: This file contains table operation functions for handling data in table views.
*/

/** ------------- Utility Functions for Retrieving Row Text Based on Column Value ------------- **/

/**
 * Gets the full text of a row by matching a specific column's value.
 * @param {Object} table - The table object to interact with.
 * @param {string} columnName - The name of the column to search in.
 * @param {string} value - The value to look for in the specified column.
 * @return {string|null} - Returns the text of the row as a single string, or null if not found.
 */
function GetRowTextByValue(table, columnName, value) {
    for (var i = 0; i < table.RowCount; i++) {
        if (table.Cell(i, columnName).Text === value) {
            return table.Row(i).Text;
        }
    }
    Log.Error("No row found with value: " + value + " in column: " + columnName);
    return null;
}

/**
 * Retrieves the text of each cell in a specific row based on a key column and its value.
 * @param {Object} table - The table object to interact with.
 * @param {string} keyColumnName - The name of the column to search in.
 * @param {string} keyValue - The value to look for in the key column.
 * @return {Array|null} - Returns an array of strings with each cell's text in the row, or null if not found.
 */
function LIB_COMMON_TableUtilities_GetRowTextByValue(table, keyColumnName, keyValue) {
    var rowCount = table.RowCount;
    var colCount = table.ColumnCount;
    var rowText = [];

    for (var row = 0; row < rowCount; row++) {
        if (table.Cell(keyColumnName, row).Value == keyValue) {
            for (var col = 0; col < colCount; col++) {
                rowText.push(table.Cell(col, row).Text);
            }
            Log.Message("Row found with key value '" + keyValue + "': " + rowText.join(", "));
            return rowText;
        }
    }

    Log.Warning("Row with key value '" + keyValue + "' not found in the table.");
    return null;
}

/** ------------- Export Functions ------------- **/

module.exports = {
    GetRowTextByValue,
    LIB_COMMON_TableUtilities_GetRowTextByValue
};
