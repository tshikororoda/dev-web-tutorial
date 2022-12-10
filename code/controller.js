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

  // Set/initialize currentPage to argument.
  currentPage = value;

  if(currentPage == undefined){

    /*
        If the currentPage is set to undefined value.
        This is loaded as a default.
                                      */
      document.title  = "Home | Dakalo Tshikororo ";
      currentPage     = "Home";
      loadedPage      = "./" + currentPage + ".html";

      iframe.setAttribute("src", loadedPage);

	}else{ // if currentPage is set to a defined value

      document.title = value + " | Dakalo Tshikororo ";
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