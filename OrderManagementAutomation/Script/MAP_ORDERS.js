/*
* Class: MAP_ORDERS.js
* Ingroup L4 - Object Maps
* Author: Gonzalo
* Since: 2024/10/29
* Copyright (c) 2024, Capgemini Engineering. All Rights reserved.
*
* Purpose: Contains the mapped objects from the Orders App.
*/


function MAP_Orders() {
    return {
        // Main Form and Toolbar
        scr_main_mainForm: "Aliases.Orders.MainForm",
        tbar_main_toolbar: "Aliases.Orders.MainForm.ToolBar",
        tbl_main_ordersView: "Aliases.Orders.MainForm.OrdersView",

        // Order Form Fields
        slc_productName: "Aliases.Orders.OrderForm.Group.ProductNames",
        slc_quantity: "Aliases.Orders.OrderForm.Group.Quantity",
        slc_date: "Aliases.Orders.OrderForm.Group.Date",
        txt_price: "Aliases.Orders.OrderForm.Group.Price",
        txt_discount: "Aliases.Orders.OrderForm.Group.Discount",
        txt_total: "Aliases.Orders.OrderForm.Group.groupBox1.Total",
        txt_customerName: "Aliases.Orders.OrderForm.Group.CustomerName",
        txt_street: "Aliases.Orders.OrderForm.Group.Street",
        txt_city: "Aliases.Orders.OrderForm.Group.City",
        txt_state: "Aliases.Orders.OrderForm.Group.State",
        txt_zip: "Aliases.Orders.OrderForm.Group.Zip",

        // Radio Buttons for Card Type
        rdb_cardTypeVisa: "Aliases.Orders.OrderForm.Group.Visa",
        rdb_cardTypeMasterCard: "Aliases.Orders.OrderForm.Group.MasterCard",
        rdb_cardTypeAmEx: "Aliases.Orders.OrderForm.Group.AE",

        // Card Number and Expiration Date Fields
        txt_cardNumber: "Aliases.Orders.OrderForm.Group.CardNo",
        slc_expDate: "Aliases.Orders.OrderForm.Group.ExpDate",

        // Order Form Buttons
        btn_ok: "Aliases.Orders.OrderForm.ButtonOK",
        btn_cancel: "Aliases.Orders.OrderForm.ButtonCancel",

        // Confirmation Dialog
        lbl_message: "Aliases.Orders.dlgConfirmation.message",
        message: "Aliases.Orders.dlgConfirmation",
        btn_save: "Aliases.Orders.dlgSaveAs.btnSave",
        btn_confirmation_si: "Aliases.Orders.dlgConfirmation.btnYes",
        btn_confirmation_no: "Aliases.Orders.dlgConfirmation.btnNo"
    };
}

// Export the MAP_ORDERS function as an object
module.exports.MAP_Orders = MAP_Orders;