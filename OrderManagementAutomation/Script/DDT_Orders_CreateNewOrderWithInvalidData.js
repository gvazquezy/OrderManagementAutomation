// DDT_Orders_CreateNewOrderWithInvalidData.js

var OrdersActions = require("OrdersActions");

function DDT_Orders_CreateNewOrderWithInvalidData() {

    // Inicialización
    Project.Variables.executionDataInvalid.Reset();
    var counter = 1;

    // Iteración por cada set de datos
    while (!Project.Variables.executionDataInvalid.IsEOF()) {
        var currentTestCase = Project.TestItems.Current.Name + "_ID_" + counter;
        aqTestCase.Begin(currentTestCase);

        // Abrir formulario de nueva orden
        OrdersActions.OrdersActions_OpenTheNewOrderForm();

        // Llenar el formulario con datos de prueba que contienen campos no válidos
        OrdersActions.OrdersActions_FillTheNewOrderFormData(
            Project.Variables.executionDataInvalid.Value("product"),
            Project.Variables.executionDataInvalid.Value("quantity"),
            Project.Variables.executionDataInvalid.Value("price"),
            Project.Variables.executionDataInvalid.Value("discount"),
            Project.Variables.executionDataInvalid.Value("total"),
            Project.Variables.executionDataInvalid.Value("date"),
            Project.Variables.executionDataInvalid.Value("customerName"),
            Project.Variables.executionDataInvalid.Value("street"),
            Project.Variables.executionDataInvalid.Value("city"),
            Project.Variables.executionDataInvalid.Value("state"),
            Project.Variables.executionDataInvalid.Value("zip"),
            Project.Variables.executionDataInvalid.Value("cardType"),
            Project.Variables.executionDataInvalid.Value("cardNumber"),
            Project.Variables.executionDataInvalid.Value("expirationDate")
        );

       // Save the order
        OrdersActions.OrdersActions_SaveTheOrderData();


        // Verify that the inserted order data is correct
        OrdersActions.Verify_OrdersActions_OrderValues(
            Project.Variables.executionDataInvalid.Value("customerName"),
            Project.Variables.executionDataInvalid.Value("product"),
            Project.Variables.executionDataInvalid.Value("quantity"),
            Project.Variables.executionDataInvalid.Value("date"),
            Project.Variables.executionDataInvalid.Value("street"),
            Project.Variables.executionDataInvalid.Value("city"),
            Project.Variables.executionDataInvalid.Value("state"),
            Project.Variables.executionDataInvalid.Value("zip"),
            Project.Variables.executionDataInvalid.Value("cardType"),
            Project.Variables.executionDataInvalid.Value("cardNumber"),
            Project.Variables.executionDataInvalid.Value("expirationDate")
        );


        aqTestCase.End();
        Project.Variables.executionDataInvalid.Next();
        counter++;
    }
}

module.exports = DDT_Orders_CreateNewOrderWithInvalidData;
