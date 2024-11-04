
var LIB_COMMON_Utilities = require("LIB_COMMON_Utilities");
var LIB_COMMON_Validations = require("LIB_COMMON_Validations");


function Test1() {
    // Define the alias and timeout
    var alias = "Aliases.Orders.MainForm";
    var timeout = 5000;

    // Call the function and store the result
  obj = LIB_COMMON_Utilities.LIB_COMMON_Utilities_WaitForObject(alias, timeout);
    
    // Log the result to see if the object was found
    if (obj) {
        Log.Message("Object found and ready: " + obj.FullName);
    } else {
        Log.Error("Object was not found or was not ready within the expected time.");
    }
}


function Test2() {
    // Ejemplos de prueba para verificar si las funciones funcionan correctamente
    var emptyObject = {};
    var nonEmptyObject = { key: "value" };
    var emptyString = "";
    var nullValue = null;
    var undefinedValue;
    var nonEmptyString = "Test";

    Log.Message("Is empty object: " + LIB_COMMON_Utilities.LIB_COMMON_Utilities_IsEmpty(emptyObject)); // true
    Log.Message("Is non-empty object: " + LIB_COMMON_Utilities.LIB_COMMON_Utilities_IsEmpty(nonEmptyObject)); // false
    Log.Message("Is empty string: " + LIB_COMMON_Utilities.LIB_COMMON_Utilities_IsEmpty(emptyString)); // true
    Log.Message("Is null value: " + LIB_COMMON_Utilities.LIB_COMMON_Utilities_IsEmpty(nullValue)); // true
    Log.Message("Is undefined value: " + LIB_COMMON_Utilities.LIB_COMMON_Utilities_IsEmpty(undefinedValue)); // true
    Log.Message("Is non-empty string: " + LIB_COMMON_Utilities.LIB_COMMON_Utilities_IsEmpty(nonEmptyString)); // false
}


var mainForm = require("FUNC_Orders_MainForm");
var MAP_Orders = require("MAP_Orders");


function Test_ClickToolbarItem() {
    var index = 4; // Índice del elemento que quieres probar (ajusta según corresponda)
    
    // Llama a la función de prueba
    mainForm.FUNC_Orders_MainForm_ClickOnToolbarItem(index);
}


function Test3()
{
  Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("FamilyAlbum");
}

function LIB_COMMON_DeleteFirstOrder() {
    var ordersApp = Aliases.Orders;
    var mainForm = ordersApp.MainForm;
    var ordersView = mainForm.OrdersView;

    // Obtener el número total de órdenes
    var itemCount = ordersView.wItemCount;

    if (itemCount > 0) {
        Log.Message("Number of orders before deletion: " + itemCount);
        
        // Seleccionar la primera orden (índice 0)
        ordersView.ClickItem(0);

        // Hacer clic en el botón de borrar en la barra de herramientas
        mainForm.ToolBar.ClickItem(6, false); // Índice del botón de eliminar

        // Confirmar la eliminación
        var confirmationDialog = ordersApp.dlgConfirmation;
        confirmationDialog.btnYes.ClickButton();

        Log.Message("First order deleted successfully.");
        
        // Verificar el nuevo número de órdenes
        var newItemCount = ordersView.wItemCount;
        Log.Message("Number of orders after deletion: " + newItemCount);
    } else {
        Log.Warning("No orders found in OrdersView to delete.");
    }
}


/**
 * Deletes the first order and verifies that it has been removed from OrdersView.
 */
function LIB_COMMON_Verify_DeleteFirstOrder() {
    var ordersApp = Aliases.Orders;
    var mainForm = ordersApp.MainForm;
    var ordersView = mainForm.OrdersView;

    // Obtener el número de órdenes antes de la eliminación
    var initialItemCount = ordersView.wItemCount;

    if (initialItemCount > 0) {
        Log.Message("Number of orders before deletion: " + initialItemCount);

        // Llamar a la función para borrar la primera orden
        LIB_COMMON_DeleteFirstOrder();

        // Espera un momento para que la lista se actualice
        Delay(1000);

        // Obtener el nuevo número de órdenes después de la eliminación
        var newItemCount = ordersView.wItemCount;

        // Verificar si la cantidad de órdenes ha disminuido en uno
        if (newItemCount === initialItemCount - 1) {
            Log.Checkpoint("The order was successfully deleted. Number of orders after deletion: " + newItemCount);
        } else {
            Log.Error("The order was not deleted correctly. Expected: " + (initialItemCount - 1) + ", Actual: " + newItemCount);
        }
    } else {
        Log.Warning("No orders found in OrdersView to delete.");
    }
}

module.exports.LIB_COMMON_Verify_DeleteFirstOrder = LIB_COMMON_Verify_DeleteFirstOrder;







//Editar dato 


function Test4()
{
  let orders = Aliases.Orders;
  orders.MainForm.MainMenu.Click("Report|Generate customer list...");
  orders.dlgSaveAs.btnSave.ClickButton();
  orders.dlgConfirmSaveAs.Confirm_Save_As.CtrlNotifySink.btnYes.ClickButton();
}


function Test5()
{
  Aliases.Orders.MainForm.ToolBar.ClickItem(0, false);
}


function Test6()
{
  let orders = Aliases.Orders;
  orders.MainForm.ToolBar.ClickItem(1, false);
  orders.dlgOpen.OpenFile("C:\\Users\\Public\\Documents\\TestComplete 15 Samples\\Desktop\\Orders\\C#\\TCProjects\\MyTable.tbl", "Table (*.tbl)");
}


function Test7()
{
  Aliases.Orders.MainForm.ToolBar.ClickItem(2, false);
}