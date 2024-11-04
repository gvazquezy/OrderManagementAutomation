/**
 * Class: FUNC_Orders_OrdersForm.js
 * Ingroup: L2 - Project Functions
 * Author: Gonzalo Vázquez
 * Since: 2024/10/29
 * Purpose: This file contains functions to interact with the New Order form in the Orders application.
 */

// Import mapping object and initialize UI objects
var MAP_ORDERS = require("MAP_ORDERS");
var uiObject = MAP_ORDERS.MAP_Orders();

/** ------------------------- Order Form Filling Functions ------------------------- **/

/**
 * Fills in the New Order form with the provided data.
 * @param {string} product - Product name
 * @param {number} quantity - Quantity of the product
 * @param {number} price - Price of the product
 * @param {number} discount - Discount applied
 * @param {number} total - Total amount
 * @param {string} date - Order date
 * @param {string} customerName - Customer's name
 * @param {string} street - Customer's street address
 * @param {string} city - Customer's city
 * @param {string} state - Customer's state
 * @param {string} zip - Customer's zip code
 * @param {string} cardType - Card type (e.g., Visa, MasterCard)
 * @param {string} cardNumber - Card number
 * @param {string} expirationDate - Card expiration date
 */
function FUNC_Orders_OrdersForm_FillNewOrderData(product, quantity, price, discount, total, date, customerName, street, city, state, zip, cardType, cardNumber, expirationDate) {
    try {
        // Set product selection
        var comboBoxProduct = eval(uiObject["slc_productName"]);
        if (comboBoxProduct && comboBoxProduct.Exists) {
            comboBoxProduct.Click();
            comboBoxProduct.ClickItem(product);
            Log.Message("Product selected: " + product);
        } else {
            Log.Error("Product ComboBox not found.");
            return;
        }

        // Set quantity
        var quantityField = eval(uiObject["slc_quantity"]);
        if (quantityField && quantityField.Exists) {
            quantityField.Click();
            quantityField.Keys("^a[BS]"); // Clear existing value
            quantityField.Keys(quantity.toString());
            Log.Message("Quantity set to: " + quantity);
        } else {
            Log.Error("Quantity field not found.");
        }

        // Set other form fields
        eval(uiObject["txt_price"]).SetText(price.toString());
        eval(uiObject["txt_discount"]).SetText(discount.toString());
        eval(uiObject["txt_total"]).SetText(total.toString());

        // Set date
        var dateField = eval(uiObject["slc_date"]);
        if (dateField && dateField.Exists) {
            dateField.wDate = date;
            Log.Message("Date set to: " + date);
        } else {
            Log.Error("Date field not found.");
        }

        // Set customer and address details
        eval(uiObject["txt_customerName"]).SetText(customerName);
        eval(uiObject["txt_street"]).SetText(street);
        eval(uiObject["txt_city"]).SetText(city);
        eval(uiObject["txt_state"]).SetText(state);
        eval(uiObject["txt_zip"]).SetText(zip);

        // Select card type
        if (cardType === "Visa") {
            eval(uiObject["rdb_cardTypeVisa"]).Click();
        } else if (cardType === "MasterCard") {
            eval(uiObject["rdb_cardTypeMasterCard"]).Click();
        } else if (cardType === "American Express") {
            eval(uiObject["rdb_cardTypeAmEx"]).Click();
        }

        // Set card details
        eval(uiObject["txt_cardNumber"]).SetText(cardNumber);

        // Set expiration date
        var expDateField = eval(uiObject["slc_expDate"]);
        if (expDateField && expDateField.Exists) {
            expDateField.wDate = expirationDate;
            Log.Message("Expiration date set to: " + expirationDate);
        } else {
            Log.Error("Expiration date field not found.");
        }

        Log.Message("Form filled successfully.");
    } catch (error) {
        Log.Error("Failed to fill the form: " + error.message);
    }
}

/** ------------------------- Order Form Action Functions ------------------------- **/

/**
 * Saves the order data by clicking the OK button in the form.
 */
function FUNC_Orders_OrdersForm_SaveOrderData() {
    try {
        var buttonOK = eval(uiObject["btn_ok"]);
        if (buttonOK && buttonOK.Exists) {
            buttonOK.Click();
            Log.Message("Order data has been saved successfully.");
        } else {
            Log.Error("OK button not found in the order form.");
        }
    } catch (error) {
        Log.Error("Failed to save order data: " + error.message);
    }
}

/**
 * Cancels the order entry by clicking the Cancel button.
 */
function FUNC_Orders_OrdersForm_CancelOrderData() {
    try {
        var buttonCancel = eval(uiObject["btn_cancel"]);
        if (buttonCancel && buttonCancel.Exists) {
            buttonCancel.Click();
            Log.Message("Order entry has been canceled.");
        } else {
            Log.Error("Cancel button not found in the order form.");
        }
    } catch (error) {
        Log.Error("Failed to cancel order entry: " + error.message);
    }
}

/**
 * Clears all fields in the New Order form.
 */
function FUNC_Orders_OrdersForm_ClearOrderData() {
    eval(uiObject["slc_productName"]).SetText("");
    eval(uiObject["slc_quantity"]).SetText("");
    eval(uiObject["txt_price"]).SetText("");
    eval(uiObject["txt_discount"]).SetText("");
    eval(uiObject["txt_total"]).SetText("");
    eval(uiObject["slc_date"]).SetText("");
    eval(uiObject["txt_customerName"]).SetText("");
    eval(uiObject["txt_street"]).SetText("");
    eval(uiObject["txt_city"]).SetText("");
    eval(uiObject["txt_state"]).SetText("");
    eval(uiObject["txt_zip"]).SetText("");
    eval(uiObject["txt_cardNumber"]).SetText("");
    eval(uiObject["slc_expDate"]).SetText("");
    Log.Message("All fields in the New Order form have been cleared.");
}

/** ------------------------- Exported Functions ------------------------- **/

// Export functions to make them accessible from other modules
module.exports = {
    FUNC_Orders_OrdersForm_FillNewOrderData,
    FUNC_Orders_OrdersForm_SaveOrderData,
    FUNC_Orders_OrdersForm_CancelOrderData,
    FUNC_Orders_OrdersForm_ClearOrderData
};
