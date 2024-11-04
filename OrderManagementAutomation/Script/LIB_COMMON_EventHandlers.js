/*
* Class: LIB_COMMON_EventHandlers.js
* Ingroup L3 - Common and Support Functions
* Author: Gonzalo Vázquez
* Since: 2024/10/29
* Copyright (c) 2024, Capgemini Engineering. All Rights reserved.
*
* Purpose: This file contains common event handlers for the Orders application,
*          including error handling, initialization, and other reusable event-based logic.
*/

// Event handler for unexpected errors
function handleUnexpectedError(error) {
    Log.Error("Unexpected error occurred: " + error.message);
    // Optionally, you can add more logic here, like screenshots or retry mechanisms
}

// Event handler that runs at the beginning of each test
function onStartTest(testName) {
    Log.Message("Starting test: " + testName);
    // Include any setup logic, such as resetting data or configurations
}

// Event handler that runs at the end of each test
function onEndTest(testName) {
    Log.Message("Ending test: " + testName);
    // Include any cleanup logic, like closing forms or clearing temp data
}

// Event handler for object clicks (example)
function onObjectClick(object) {
    if (object.Exists) {
        object.Click();
        Log.Message("Clicked on: " + object.Name);
    } else {
        Log.Error("Object not found: " + object.Name);
    }
}

// Exporting the event handler functions
module.exports = {
    handleUnexpectedError,
    onStartTest,
    onEndTest,
    onObjectClick
};
