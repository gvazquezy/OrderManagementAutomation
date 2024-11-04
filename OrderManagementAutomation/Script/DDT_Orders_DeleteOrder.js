var OrdersActions = require("OrdersActions");

function DDT_Orders_DeleteOrder() {
    aqTestCase.Begin("CP04: Eliminación de Orden");

    // Delete the first order and verify deletion
    OrdersActions.OrdersActions_DeleteFirstOrder();
    OrdersActions.OrdersActions_VerifyOrderDeletion();

    aqTestCase.End();
}

module.exports = DDT_Orders_DeleteOrder;
