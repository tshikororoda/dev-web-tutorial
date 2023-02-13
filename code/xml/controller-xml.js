"use strict";

/*
	
	Pseudo Code
	---------------------------------------
	
	Define variable called moduleName.
	Set/initialize the value of moduleName to undefined.
	Define a function called loadModuleContent with parameter variable called xmlFileName.
		loadModuleContent(value)
			Create an XMLHttpRequest object asigned on xhttp variable: 
				xhttp = new XMLHttpRequest()   
			
			Define a callback function:			
			xhttp.onload = function() {
				// What to do when the response is ready
			}
		
			Define constant variables called myName with "Dakalo Tshikororo" string assigned to it.
			
			if the xmlFileName is set to undefined value
				Define and set xmlFileName to "Home". 
				Define and set title to: xmlFileName.charAt(0).toUpperCase() + xmlFileName.slice(1 , xmlFileName.length);
				Set document.title to title and myName.
				Send a request to a server if xmlFileName undefined.
					xhttp.open("GET", xmlFileName + ".xml")
					xhttp.send()
			
			else the xmlFileName is set to defined value
				Define and set title to: xmlFileName.charAt(0).toUpperCase() + xmlFileName.slice(1 , xmlFileName.length);
				Set document.title to title and myName.
				Send a request to a server if xmlFileName defined.
					xhttp.open("GET", xmlFileName + ".xml")
					xhttp.send()
		
	Define the function called displayModuleContent with xml as a parameter to be executed when the response is ready.
		displayModuleContent(xml)
			Define the constant variable called content response as an XML DOM
	
	Undefined
----------------------------------	
	
	> The undefined data type is returned when you access a property on an object that does not exist, or 
	> use a variable before it is declared, or 
	> before it is assigned a value.

*/

// Define the parameter variable called moduleName.
let moduleName;

// Set/initialize moduleName to undefined.
moduleName = undefined;

// Define a function called loadModuleContent with parameter variable called xmlFileName

function loadModuleContent(xmlFileName) {
		
	// Create an XMLHttpRequest object
	const xhttp = new XMLHttpRequest();
	  
	// Define a callback function
	xhttp.onload = function() {
		
		displayModuleContent(this);
	}
 
	// Define constant variables
	const myName = "Dakalo Tshikororo";
	
	if(xmlFileName == undefined){
		
		/*  
		 * @ If the xmlFileName is set to undefined value.
		 * @ This is loaded as a default. 
		 *
		 ***************************************************************/
											
		
		let xmlFileName = "home"; // default value
		let title 		= xmlFileName.charAt(0).toUpperCase() + xmlFileName.slice(1 , xmlFileName.length);
		
		// Set title of the page loaded/active
		document.title  = title + " | " + myName;
		
		// Send a request to a server if xmlFileName undefined
		xhttp.open("GET", "./content/" + xmlFileName + ".xml");
		xhttp.send();
	
	}else{
	 
		/* 
		 *	
		 * Enforce the first letter of the title of active page to be uppercase
		 *
		 ***********************************************************************/
		
		let title = xmlFileName.charAt(0).toUpperCase() + xmlFileName.slice(1 , xmlFileName.length);

		// Set title of the page loaded/active
		document.title = title + " | " + myName;
		
		// Send a request to a server if xmlFileName is define
		xhttp.open("GET", "./content/" + xmlFileName + ".xml");
		xhttp.send();
	}
 
}

// Run this functions when the document is loaded
window.onload = function()	{
		
	loadModuleContent(moduleName);

}

// Define the function to be executed when the response is ready
function displayModuleContent(xml) {
  
  // Define the constant variable called xmlDom to get response as an XML DOM
  const xmlDom = xml.responseXML;
  
  // Define constant variable called module to select a child of root element form XML DOM  
  const module = xmlDom.getElementsByTagName("MODULE");
  
  // 
  let content =	"";
  
  // Loop
  for (let i = 0; i <module.length; i++) { 
	
	// Select a childNodes element module element.
    content += module[i].getElementsByTagName("DATA")[0].childNodes[0].nodeValue;
  }
  
  // Load/insert content on main element
  document.getElementById("mainContent").innerHTML = content;
}