/*
* Class: LIB_COMMON_FileUtilities.js
* Ingroup: L3 - Common and Support Functions
* Author: Gonzalo
* Since: 2024/10/29
*/



/**
 * Checks if a specified file is empty.
 * @param {string} filePath - The full path of the file to check.
 * @returns {boolean} - Returns true if the file is not empty, false if it is empty.
 */
function LIB_COMMON_FileUtils_IsFileNotEmpty(filePath) {
    try {
        if (!aqFileSystem.Exists(filePath)) {
            Log.Error("File does not exist: " + filePath);
            return false;
        }

        // Get file information using aqFileSystem
        var file = aqFileSystem.GetFileInfo(filePath);
        var fileSize = file.Size;

        if (fileSize > 0) {
            Log.Message("File is not empty. Size: " + fileSize + " bytes.");
            return true;
        } else {
            Log.Warning("File is empty.");
            return false;
        }
    } catch (error) {
        Log.Error("Error checking if file is empty: " + error.message);
        return false;
    }
}

/**
 * Clicks the Save button in the Save As dialog.
 */
function LIB_COMMON_FileUtils_ClickSaveButton() {
    try {
        var saveButton = Aliases.Orders.dlgSaveAs.btnSave;
        saveButton.ClickButton();
        Log.Message("Clicked Save button in Save As dialog.");
    } catch (error) {
        Log.Error("Save button not found: " + error.message);
    }
}

/**
 * Confirms the file overwrite if the confirmation dialog appears.
 */
function LIB_COMMON_FileUtils_ConfirmOverwrite() {
    var confirmDialog = Aliases.Orders.dlgConfirmSaveAs;
    if (confirmDialog.Exists) {
        confirmDialog.Confirm_Save_As.CtrlNotifySink.btnYes.ClickButton();
        Log.Message("Confirmed file overwrite in Save As dialog.");
    } else {
        Log.Warning("Confirmation dialog not found, skipping overwrite confirmation.");
    }
}



/**
 * Opens a file from the Open dialog by specifying the file path.
 * @param {string} filePath - The path of the file to open.
 */
function LIB_COMMON_FileUtils_OpenFileDialog(filePath) {
    try {
        var openDialog = Aliases.Orders.dlgOpen;
        openDialog.OpenFile(filePath, "Table (*.tbl)");
        Log.Message("Opened file: " + filePath);
    } catch (error) {
        Log.Error("Error opening file: " + error.message);
    }
}

/**
 * Checks if the specified file exists.
 * @param {string} filePath - Path to the file.
 * @returns {boolean} - True if the file exists, false otherwise.
 */
function LIB_COMMON_FileUtils_FileExists(filePath) {
    return fso.FileExists(filePath);
}


// Export functions to be used in other modules
module.exports = {
    LIB_COMMON_FileUtils_ClickSaveButton,
    LIB_COMMON_FileUtils_ConfirmOverwrite,
    LIB_COMMON_FileUtils_IsFileNotEmpty,
    LIB_COMMON_FileUtils_OpenFileDialog,
    LIB_COMMON_FileUtils_FileExists
};
