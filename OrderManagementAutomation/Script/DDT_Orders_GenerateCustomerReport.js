/*
* Class: DDT_Orders_GenerateCustomerReport.js
* Ingroup: L0 - DDT Test Cases
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Purpose: Data-driven test case to generate and validate a customer report.
*/

var OrdersActions = require("OrdersActions");

/**
 * Data-Driven Test Case: Generate Customer Report
 * 
 * This function triggers the customer report generation process
 * and validates that the generated file is saved correctly and is not empty.
 */
function DDT_Orders_GenerateCustomerReport() {
    // Generate and validate the report content
    OrdersActions.OrdersActions_GenerateAndSaveCustomerReport(Project.Variables.filePath);
}

module.exports = DDT_Orders_GenerateCustomerReport;
