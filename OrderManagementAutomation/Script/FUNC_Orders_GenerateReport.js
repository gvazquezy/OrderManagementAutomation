/*
* Class: FUNC_Orders_GenerateReport.js
* Ingroup: L2 - Project Functions
* Author: Gonzalo Vázquez
* Since: 2024/10/29
*/

var fileUtils = require("LIB_COMMON_FileUtilities");

/**
 * Generates a customer list report by navigating through the Report menu.
 */
function FUNC_Orders_GenerateCustomerListReport(filePath) {
    try {
        var ordersApp = Aliases.Orders;
        var mainMenu = ordersApp.MainForm.MainMenu;

        // Click "Report" and then "Generate customer list..."
        mainMenu.Click("Report|Generate customer list...");
        Log.Message("Navigated to Report > Generate customer list...");

        // Click save using the file utility
        fileUtils.LIB_COMMON_FileUtils_ClickSaveButton();

        // Confirm overwrite if prompted
        fileUtils.LIB_COMMON_FileUtils_ConfirmOverwrite();

        // Verifica si el archivo generado no está vacío usando `filePath`
        var isFileNotEmpty = fileUtils.LIB_COMMON_FileUtils_IsFileNotEmpty(filePath);
        if (isFileNotEmpty) {
            Log.Checkpoint("Report generated successfully and is not empty.");
        } else {
            Log.Error("Generated report is empty.");
        }

    } catch (error) {
        Log.Error("Error generating customer list report: " + error.message);
    }
}

// Exporta la función para ser usada en otros módulos
module.exports = {
    FUNC_Orders_GenerateCustomerListReport
};
