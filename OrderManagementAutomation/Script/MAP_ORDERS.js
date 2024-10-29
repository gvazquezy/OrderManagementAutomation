/*
* Class: MAP_ORDERS.js
* Ingroup L4 - Object Maps
* Author: Gonzalo Gonzalez
* Since: 2024/10/29
* Copyright (c) 2024, Capgemini Engineering. All Rights reserved.
*
* Purpose: This file contains the mappings of the primary elements of the Orders application,
*          including all relevant fields and controls in the main Orders view and the New Order form.
*/

// Mappings for the main Orders view
var ordersMainForm = Aliases.Orders.MainForm;
var toolBar = ordersMainForm.ToolBar;
var orderTable = ordersMainForm.OrdersView;
var orderForm = Aliases.Orders.OrderForm;

// Toolbar Buttons
var newButton = toolBar.New;                   // First icon: New
var openButton = toolBar.Open;                 // Second icon: Open
var saveButton = toolBar.Save;                 // Third icon: Save
var newOrderButton = toolBar.NewOrder;         // Fourth icon: New Order
var editOrderButton = toolBar.EditOrder;       // Fifth icon: Edit Order
var deleteOrderButton = toolBar.DeleteOrder;   // Sixth icon: Delete Order
var viewLargeIconsButton = toolBar.LargeIcons; // Seventh icon: View Large Icons
var viewSmallIconsButton = toolBar.SmallIcons; // Eighth icon: View Small Icons
var viewListButton = toolBar.ListView;         // Ninth icon: View List
var viewDetailsButton = toolBar.DetailsView;   // Tenth icon: View Details

// Order Table Columns (for data verification and interactions)
var orderTable_CustomerName = orderTable.CustomerName;
var orderTable_Product = orderTable.Product;
var orderTable_Quantity = orderTable.Quantity;
var orderTable_Date = orderTable.Date;
var orderTable_Street = orderTable.Street;
var orderTable_City = orderTable.City;

// New Order Data
var orderForm = Aliases.Orders.OrderForm;
var productField = orderForm.Group.ProductNames;       // Product field
var quantityField = orderForm.Group.Quantity;         // Quantity field
var priceField = orderForm.Group.Price;               // Price field
var discountField = orderForm.Group.Discount;         // Discount field
var totalField = orderForm.Group.groupBox1.Total;     // Total field
var dateField = orderForm.Group.Date;                  // Date field
var customerNameField = orderForm.Group.CustomerName; // Customer Name field
var streetField = orderForm.Group.Street;           // Street field
var cityField = orderForm.Group.City;               // City field
var stateField = orderForm.Group.State;             // State field
var zipField = orderForm.Group.Zip;                 // Zip field
var cardTypeVisa = orderForm.Group.Visa;       // Card Type Visa option
var cardTypeMasterCard = orderForm.Group.MasterCard; // Card Type MasterCard option
var cardTypeAmEx = orderForm.Group.AE;  // Card Type American Express option
var cardNumberField = orderForm.Group.CardNo;       // Card Number field
var expirationDateField = orderForm.Group.ExpDate;  // Expiration Date field

// Buttons on Order Form
var buttonOK = orderForm.ButtonOK;
var buttonCancel = orderForm.ButtonCancel;
