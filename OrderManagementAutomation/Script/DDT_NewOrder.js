/**
 * Class: Orders_AddOrderTest.js
 * Ingroup: L0 - Test Cases
 * Author: Gonzalo
 * Since: 2024/10/30
 * Copyright (c) 2024, Capgemini Engineering. All Rights reserved.
 *
 * Purpose: This test case verifies that a new order can be successfully added to the Orders application.
 */

// Importing necessary modules from lower levels
var OrdersActions = require("OrdersActions"); // L1 - Business Actions
var commonFunctions = require("LIB_COMMON_Utilities");
var LIB_COMMON_Validations = require("LIB_COMMON_Validations");
var orders_mainForm = require("FUNC_Orders_MainForm");


function DDT_NewOrder() {
  
 
  
    // Initial setup
    Project.Variables.executionData.Reset();
    var counter = 1;

    // Loop through the test data
    while (!Project.Variables.executionData.IsEOF()) {
        var currentTestCase = Project.TestItems.Current.Name + "_ID_" + counter;
        aqTestCase.Begin(currentTestCase);

        

        // Navigate to the New Order form
        OrdersActions.OrdersActions_OpenTheNewOrderForm();

        // Fill in the form with the data from the test data table
        OrdersActions.OrdersActions_FillTheNewOrderFormData(
            Project.Variables.executionData.Value("product"),
            Project.Variables.executionData.Value("quantity"),
            Project.Variables.executionData.Value("price"),
            Project.Variables.executionData.Value("discount"),
            Project.Variables.executionData.Value("total"),
            Project.Variables.executionData.Value("date"),
            Project.Variables.executionData.Value("customerName"),
            Project.Variables.executionData.Value("street"),
            Project.Variables.executionData.Value("city"),
            Project.Variables.executionData.Value("state"),
            Project.Variables.executionData.Value("zip"),
            Project.Variables.executionData.Value("cardType"),
            Project.Variables.executionData.Value("cardNumber"),
            Project.Variables.executionData.Value("expirationDate")
        );

        // Save the order
        OrdersActions.OrdersActions_SaveTheOrderData();

        // Verify that the inserted order data is correct
        OrdersActions.Verify_OrdersActions_OrderValues(
            Project.Variables.executionData.Value("customerName"),
            Project.Variables.executionData.Value("product"),
            Project.Variables.executionData.Value("quantity"),
            Project.Variables.executionData.Value("date"),
            Project.Variables.executionData.Value("street"),
            Project.Variables.executionData.Value("city"),
            Project.Variables.executionData.Value("state"),
            Project.Variables.executionData.Value("zip"),
            Project.Variables.executionData.Value("cardType"),
            Project.Variables.executionData.Value("cardNumber"),
            Project.Variables.executionData.Value("expirationDate")
        );

        // Close the Orders application after each iteration
       // commonFunctions.LIB_COMMON_Utilities_CloseApp("Orders");

        aqTestCase.End();
        Project.Variables.executionData.Next();
        counter++;
    }
}



/**
 * Edits the first order in the OrdersView if any orders exist.
 */
function Edit_FirstOrder() {
   
    

    // Verificamos si el objeto OrdersView existe y es visible
    if (OrdersActions.ExitOrders()) {
        
   
        
            

            // Seleccionar la primera orden
            ordersView.ClickItem(0);

            // Abrir el formulario de edición
            OrdersActions.OrdersActions_OpenEditOrderForm();

            // Modificar los datos necesarios
            OrdersActions.OrdersActions_FillTheNewOrderFormData(
            
                Project.Variables.executionData.Value("product"),
                Project.Variables.executionData.Value("quantity"),
                Project.Variables.executionData.Value("price"),
                Project.Variables.executionData.Value("discount"),
                Project.Variables.executionData.Value("total"),
                Project.Variables.executionData.Value("date"),
                Project.Variables.executionData.Value("customerName"),
                Project.Variables.executionData.Value("street"),
                Project.Variables.executionData.Value("city"),
                Project.Variables.executionData.Value("state"),
                Project.Variables.executionData.Value("zip"),
                Project.Variables.executionData.Value("cardType"),
                Project.Variables.executionData.Value("cardNumber"),
                Project.Variables.executionData.Value("expirationDate")
            
);
            // Guardar la orden modificada
            OrdersActions.OrdersActions_SaveTheOrderData();

            Log.Message("First order edited and saved successfully.");
            
            }
            

      
}

module.exports.Add_NewOrder = Add_NewOrder;
module.exports.Edit_FirstOrder = Edit_FirstOrder;

