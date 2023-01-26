"use strict";

// Define the parameter variable called moduleName.
let moduleName;

// Set/initialize moduleName to undefined.
moduleName = undefined;

// Define a function called loadPageContent with parameter variable called value
function loadPageContent(value) {

  // Define variables
  let iframe;
  let currentPage;
  let loadedPage;

  // Select iframe element from DOM passing a tag name as an argument.
  iframe = document.querySelector("iframe");

  if(value == undefined){

    /*
        If the currentPage is set to undefined value.
        This is loaded as a default.
                                      */
      let value = "home"; // default value
      let title = value.charAt(0).toUpperCase() + value.slice(1 , value.length);

      document.title  = title + " | Dakalo Tshikororo ";
      currentPage     = value;
      loadedPage      = "./" + currentPage + ".html";

      iframe.setAttribute("src", loadedPage);

	}else{ // if currentPage is set to a defined value

      // Enforce the first letter of the title of active page to be uppercase
      let title = value.charAt(0).toUpperCase() + value.slice(1 , value.length);

      // Set title of the page loaded/active
      document.title = value + " | Dakalo Tshikororo ";
      currentPage    = value;
      loadedPage     = "./" + currentPage + ".html";

      iframe.setAttribute("src", loadedPage);

	} // End of conditional statements

// Add CSS
  iframe.style.width  = "100%";
  iframe.style.height = "400px";
  iframe.style.border = "01px solid #f1f1f1";

}// End of function: loadPageContent(title);

// Run this functions when the document is loaded
window.onload = function()	{ // #01

	loadPageContent(moduleName);

}
