"use strict"

document.addEventListener('DOMContentLoaded', () => {

	const 	HTMLDocumentModules = document.querySelectorAll("a[data-nav]")
	const	main 				= document.querySelector("main")
	
	/*
	// Iframe Element: Not recommended for this exercise.
	
	const 	iframe 				= document.querySelector("#iframe")
			
	HTMLDocumentModules.forEach( HTMLDocumentModule => {
		HTMLDocumentModule.onclick = () => {
			const moduleName = onlyFirstLetterUpperCase(HTMLDocumentModule.dataset.nav)
			const modulePath = `./modules/${moduleName}.html`
			
			document.title	 = moduleName
			
			iframe.setAttribute("src", modulePath)
		}
	})
	
	const onlyFirstLetterUpperCase = (word) => {
		return (word.charAt(0).toUpperCase() +
				word.slice(1 , word.length).toLowerCase())
	}
	
	
	// XMLHttpRequest API: Recommended for this exercise.
	
	HTMLDocumentModules.forEach( HTMLDocumentModule => {
      HTMLDocumentModule.onclick = () => {
        const moduleName = onlyFirstLetterUpperCase(HTMLDocumentModule.dataset.nav)
		const modulePath = `./modules/${moduleName}.html`

        let xhttp = new XMLHttpRequest()
        let file  = `${moduleName}.html`

        if ( file ) {
          xhttp.onreadystatechange = function() {
            if ( this.readyState == 4 ) {
              if ( this.status == 200 ) { main.innerHTML = this.responseText }
              if ( this.status == 404 ) { main.innerHTML = '<h1> 404 : File not found </h1>' }            
            }
          }
        }

        xhttp.open("GET", `modules/${file}`, true)
        xhttp.send()
      }
    })
	
	*/
	
	// Fetch API: High recommended for this exercise.
	
	HTMLDocumentModules.forEach( HTMLDocumentModule => {
		HTMLDocumentModule.onclick = () => {
			const moduleName = onlyFirstLetterUpperCase( HTMLDocumentModule.dataset.nav )
			const modulePath = `./modules/${moduleName}.html`
			
			document.title	 = moduleName
			getModuleFile(modulePath)
		}
	})

	
	// Load module as landing page 
	const landingModule = `./modules/Home.html`
	getModuleFile( landingModule )

	async function getModuleFile ( file ) {	
		let moduleFile = await fetch ( file )
		if( moduleFile.status == 200 ) { 
			let moduleContent	= await moduleFile.text()
				main.innerHTML 	= moduleContent
		}else if ( moduleFile.status == 404 ) {
			main.innerHTML = '<h1 id="not-found"> Not found </h1>'
		}
	}
	
	const onlyFirstLetterUpperCase = (word) => {
		return (word.charAt(0).toUpperCase() +
				word.slice(1 , word.length).toLowerCase())
	}
})