// DDT_Orders_CreateNewOrderWithValidData.js

var OrdersActions = require("OrdersActions");

function DDT_Orders_CreateNewOrderWithValidData() {

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

module.exports = DDT_Orders_CreateNewOrderWithValidData;
