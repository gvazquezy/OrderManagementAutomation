// DDT_Orders_EditOrderWithValidData.js

var OrdersActions = require("OrdersActions");

function DDT_Orders_EditOrderWithValidData() {
    // Initial setup
    Project.Variables.executionData.Reset();
    var counter = 1;

    // Loop through the test data
    while (!Project.Variables.executionData.IsEOF()) {
        var currentTestCase = Project.TestItems.Current.Name + "_ID_" + counter;
        aqTestCase.Begin(currentTestCase);
        
        
        
          // Select the first order in OrdersView to enable the Edit option
        var ordersView = Aliases.Orders.MainForm.OrdersView;
        if (ordersView.wItemCount > 0) {
            ordersView.ClickItem(0); // Selecciona el primer ítem en la lista
            Log.Message("Selected the first order in OrdersView for editing.");
        } else {
            Log.Error("No orders available in OrdersView to edit.");
            return;
        }

        // Navigate to the Edit Order form by selecting the first order and clicking Edit
        OrdersActions.OrdersActions_OpenEditOrderForm();

        // Fill in the form with new data from the test data table
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

        // Save the edited order
        OrdersActions.OrdersActions_SaveTheOrderData();

        // Verify that the edited order data is correct
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

module.exports = DDT_Orders_EditOrderWithValidData;
