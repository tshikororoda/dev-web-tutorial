# Web Tutorial

#### /> Table of contents
+ 01 ][ Project requirements ](#projectrequirements)
+ 02 ][ Download and Install dev tools ](#devtools)
+ 03 ][ Let’s start with our development ](#letsstart)
+ 04 ][ Git - control version ](#controlversion)            
+ 05 ][ Repository ](#repository)
+ 06 ][ Home - Landing page ](#homelandingpage)
+ 07 ][ Moving *.html* files to a local web server ](#webserver)
+ 08 ][ Split source code on *index.html* ](#splitsourcecode)
+ 09 ][ Load module mark-up to entry point](#entrypointLoadmodule)

<a name="projectrequirements"></a>
#### /> Project requirements
*Alright,* now it’s time to make our own *personal website*. Design a personal webpage about ourselves. The project should be subject to the following `specification:`

+ Our website must contain at least four different `pages`, and it should be possible to get from any page on your website to any other page by following one or more `hyperlinks`.
+ Our website must include at least one `list (ordered or unordered)`, at least one `table`, and at least one `image`.
+ Our should also have some content placed within `paragraph`.
+ Your website must have at least one stylesheet file. The stylesheet(s) must use at least five different `CSS properties`, and at least five different types of `CSS selectors`. You must use the `#id selector` at least once, and the `.class selector` at least once.
+ All symbols should be implemented using `HTML entities`.

#### /> What we need
In this tutorial, I assume we have some experience on web development software, and preferably have at least a basic understanding of HTML4.0/5 and vanilla JavaScript.

##### Have the following tools

+ A `text editor` for writing code. Notepad++ is a good option for Windows, Text Wrangler is a good choice for Macs, And Emacs is a good choice for Linux. You may also choose to use an Integrated Development Environment (IDE).

+ `Web browser` *Chrome, Firefox, Internet explorer, Microsoft Edge, Safari, Opera etc*. If you choose to use Firefox: you will need to install the Firebug plugin to gain access to a full suite of development tools but there is nothing presented in this tutorial that does not work with *Firefox, IE10 or Safari*. I believe the developer tools in Chrome are now superior to those offered by other browsers, therefore if you are starting from scratch, I strongly recommend Chrome.

+ A `Web Server` This will only be required later in this tutorial, and I will explaining how to install and use the *Mongoose web server*. You may choose to use any other web server you like, but the instructions will only be provided for *Mongoose web server*.

*` Last modified: 2023-07-08 time: 19:02PM `*
***

<a name="devtools"></a>
#### /> Download and install dev tools
  Dev tools        | Download
 ----------------- | ------------------------------------------------------
 *Version control* | [Git](https://git-scm.com/download/win)
 *Text editor*     | [Notepad++](https://notepad-plus-plus.org/downloads/)
 *Web browsers*    | [Chrome](https://www.google.com/chrome/)

*` Last modified: 2023-07-08 time: 19:02PM `*

<a name="letsstart"></a>
### /> Let’s start with our development
Let's start by creating a *website directory on `c driver`* for storing all our personal website files. This is where all our website projects will live. We will be working on `Git Bash terminal` to create our *personal website directory*. Now, open your *Git bash terminal*, then click inside *terminal* after it has open, and then *type* the following command: *`cd c:/`* followed by an *`Enter`*.

*`Change directory to move to c drive`.*

``` sh

cd c:/

```

*From here on out, to execute (i.e., run) a command means to type it into a git bash terminal and then hit Enter. Commands are “case-sensitive,” so be sure not to type in uppercase when you mean lowercase or vice versa.*

*`Create a new directory called workspace on c drive`. Now, execute command below:*

``` sh

mkdir workspace

```

*To move yourself into (i.e., open) that directory. Our prompt should now resemble the below. Now, execute command below:*

``` sh

cd workspace

```

*`Create a new directory called dev-personal`. Now, execute command below:*

``` sh

mkdir dev-personal

```
*To move yourself into (i.e., open) that directory. Our prompt should now resemble the command below. Now, execute command below:*

``` sh

cd dev-personal

```

*:clap: We have successfully created root directory of our personal website*.

Below is the list of *command we have used*:

| Command | Description                  |
 -------- | -----------------------------
  _cd_    | _Change directory._
  _mkdir_ | _To create a new directory._

*` Last modified: 2023-07-08 time: 19:02PM `*

***

<a name="controlversion"></a>
### /> Git - control version

GitHub is a *code hosting platform for version control and collaboration*. It lets us and others work together on projects from anywhere. At first, we will look at git essentials: *repositories, branches, commits, and pull requests*. Since we have already created our development environment directory called *dev-personal directory*, we’ll make it a *repository* and learn GitHub's *pull request* workflow which is a popular way to create and review code.

<a name="repository"></a>
### /> `Git:` repository

+ [ Create a file called `README.md`. ](#createfile)
+ [ Make *`dev-personal`* directory a Git Repository ](#gitrepository)
+ [ Project directory Structure ](#projectdirectorystructure)

<a name="create-file"></a>
##### /> Create a file called *`README.md`*.

We can create files from *`git-bash terminal`* in two ways. The first way is to use *`touch command`*. *and the other way is to use `echo command`*. If you want to write any specific data in the file, then use `echo command`. If you are not bothered about the data in the file but just want to create a blank file, then you can use *touch command*.

*Now, execute the command below:*

``` sh

echo "# My personal website " > README.md
ls

```

*Below is the list of command we have used:*

| Command | Description                       |                 |
| ------- | ----------------------------------| --------------- |
  *ls*    | To know what is on the directory  |
  *cat*   | To create a file with content	    | cat > filename
  *touch* |	To create a file without content  | touch filename
  *fsutil*|	To create a file of specific size |

<a name="gitrepository"></a>
##### /> Make *`dev-personal`* directory a git repository

``` sh

git init

```

*The `git init` command will Initialize dev-personal directory to an `empty git repository in C:/workspace/dev-personal/.git/`*.

*:clap: We have successfully initialize root directory of our personal website project to be git repository.*

*` Last modified: 2023-07-08 time: 18:49PM `*

***

<a name="projectdirectorystructure"></a>
### /> Project directory structure

+ [ Create the `sub-directory` folder ](#subdirectory)
+ [ List of modules ](#websitemodules)
+ [ Create version file ](#createversionfile)
+ [ Creating a new branch ](#creatinganewbranch)
+ [ Basic branching and merging ](#basicbranchingandmerging)

<a name="subdirectory"></a>
#### /> Create the `sub-directory` folder

*Now,* let’s create the *sub-directory* folder using *git bash terminal*. For creating sub-folder called *`assets`*. Assets directory is a sub-directory of *`dev-personal`* directory. Inside *assets* directory we will create sub-directory of assets called *`css, js and img`* as shown below.

``` sh
# Project structure code:

├──dev-personal
|   ├─ assets/
|   |   ├─ js
|   |   ├─ css
│   |   └─ img
|   ├─ modules  
|   ├─ Index.html

```

*Now, execute the command below to generate project structure above:*

``` sh

mkdir assets
cd assets
mkdir css js img
ls
cd ../

```

| Command    | Description                      |
| ---------- | ---------------------------------|
  *`cd ../`* | *to go to the previous directory.*
  *`mkdir`*  | *to create directory folder.*

*` Last modified: 2023-07-08 time: 19:02PM `*

***

<a name="websitemodules"></a>
### /> List of modules

Our personal website project must contain at least `four` different `html` files. Our four different modules will be as follow:

| Modules	  | Html files                                   |
| --------- | ---------------------------------------------|
  Home	    | *index.html - This will be our landing page*
  About     | *about.html*
  Skills	  | *skills.html*  
  Portfolio | *portfolio.html*   
  Contact   | *contact.html*  

*Now, execute the command below to create all listed modules:*

``` sh

touch index.html about.html skills.html portfolio.html contact.html

```

<a name="createversionfile"></a>
#### /> `Git:` *create* version file

To begin tracking a *file version*, we use *`git add command`*. A version of a file is created whenever *git commit* command has been execute. This will be our first *`commit`* on the *`main`* branch. We will create other *`branches`* to work-on and *`merge`* them on *`main`* branch whenever we are happy with the results. *`In this personal website’s projects, we will make branch for each modules files for the purpose of learning.`*

Let's now begin tracking *`index.html, about.html, skills.html, portfolio.html and contact.html`*.

*Now, execute the command below:*

``` sh

git add . # staged
git commit -m " First commit: create a version of all modules files "

```

<a name="creating-a-new-branch"></a>
#### /> `Git:` *create new* branch - *for each module*

*Now,* before we do actual coding, let’s create a `new branches` for each modules *(.html files)*. As we said earlier, the whole purpose of this is to learn. We have already said we will create branches for each page or module and *`merge`* them to *`main`* branch whenever we are happy with the results. It’s a good practice to commit file and merge branches when we have meet project requirements at each stage. So, lets create a new branch called *`dakalo/home, dakalo/about, dakalo/skills, dakalo/home, dakalo/portfolio, dakalo/contact`*.

*To do this, let’s execute the following command*:

``` sh

git branch dakalo/home
git branch dakalo/about
git branch dakalo/skills
git branch dakalo/portfolio
git branch dakalo/contact

```

<a name="basicbranchingandmerging"></a>
#### /> `Git:` basic on branching and merging

*Now*, we have switch to *dakalo/home* branch but before we switch let’s go through a simple steps of `branching and merging` with a `workflow` that we might use in the real world development on our personal website project. Let’s follow these steps below:

1. Let's do some work on project main branch on landing page: = > `‘Add html5 document skeleton, and then staged and commit the changes’`

  *@Test Yourself*
  *First*, we need to open index.html on HTML editor *(Notepad++)*. When we open `index.html`, it will be a clean white file which is to write our source code. If you are a new beginner on `HTML`, switch to [`TEST YOURSELF`](#) before you perform the actual coding with us.

  *@HTML document structure*
  In [*HTML document structure*](#) repository, we can re-implement *hds* source code, there's a folder called [*hds*](#), there's html file named *`hds.index.html`*. Open this html file, and then copy and paste everything on our `index.html` on our website personal project and save the changes.

  *@Validate:*
  Before we *staged and commit* this changes on our repository, we must *`validate`* our mark-up language. Professional web developers catch errors in their written *`mark-up`* by validating their html document. *To validate a html document is to check our mark-up if it's abiding by all the rules according to the version of HTML we are using.* Html Documents that are `error-free`, are said to be valid HTML document. It is strongly recommended that we validate our mark-up html documents, especially for professional sites. *`Valid documents`* are more consistent on a variety of browsers, they display more quickly, and they are more accessible. We use [*w3 Mark-up validation service*](https://validator.w3.org/). For Html5 documents, we use [*Nu Html Checker*](https://validator.nu/) validator.

   *Browser developer tools like the Firebug plug-in for Firefox or the built-in developer tools in Safari and Chrome also have validators so we an check our markup if is error-free.*

   Let's *now* validate *`index.html`* file on our project, `fix all the bugs`, when document is `error-free`, we then `staged and commit` to create a new version of our *`index.html`* file with the following massage, `“We have added document structure (hds) on landing page”`.

2.	Create new branch for landing page called home to working on: => *`‘We have already create home branch’`*

3.	Do some work in the home branch: => *`‘This what we are going to do in the section below’`*

*` Last modified: 2023-07-08 time: 19:02PM `*

***

<a name="homelandingpage"></a>
### /> Home - Landing page

+ [ Switching branches ](#switchingbranches)
+ [ Sketching-out our design ](#sketching)
+ [ Choosing our assets ](#choosing-your-assets)
+ [ Coding design layout ](#indexcode)
+ [ Validate landing page ](#validate)
+ [ Rendered landing page ](#documentrender)
+ [ Merging home branch to main branch ](#mergetomain)

<a name="switchingbranches"></a>
#### /> Switching branches

*Do some work in the home, we have to switch to home branch, we execute the command below:*

``` sh

git checkout dakalo/home

```

<a name="sketching"></a>
#### /> Sketching out our landing page design

The *first* thing we will do is to *sketch-out the layout* of our websites landing page. We do have *`apps specialized for prototype design`* which *professional developer* uses to design full – scale layout of a websites. Grab pen and paper and sketch-out roughly, how you want our website to look. But for sketch below is design using *Microsoft PowerPoint 2016* after a rough sketch on paper.

![layout design](./resources/sketch-home.png)

<a name="choosing-your-assets"></a>
#### /> Choosing our `assets`

+ Content
+ [Theme color](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool)
+ Images
+ Font

<a name="indexcode"></a>
#### /> Coding design layout

`Layout content:` Web designers have been relying on the *&lt;div&gt;* and *&lt;span&gt;* elements to layout web content. they act as containers for other elements. These containers can then be `positioned anywhere` on the screen using *style sheets*. The difference between *&lt;span&gt;* and *&lt;div&gt;* element.

+ *&lt;span&gt;* is inline level elements
+ and *&lt;div&gt;* is block level element.

*However,* HTML5 provides an assortment of new tags that add semantic meaning to HTML document. It is not intended that the web browser will necessarily provide any visual implementation of these elements.

``` html

<!DOCTYPE html>
<html>
  <head lang="en" dir="ltr">
    <meta charset ="utf-8" />
    <meta name    ="viewport" content="width=device-width, initial-scale=1.0" />

    <title> Home </title>

  </head>
  <body>
    <!-- Start of wrapper container -->
    <div>
      <!-- Start Header container -->
        <header>
            <div>
                <div>
                    <span> My name </span>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li> <a> Home      </a> </li>
                            <li> <a> About     </a> </li>
                            <li> <a> Skills    </a> </li>
                            <li> <a> Portfolio </a> </li>
                            <li> <a> Contact   </a> </li>
                        </ul>
                    </nav>
                </div>

                <p> You are welcome, you can view the site as you wish </p>
            </div>
        </header>
        <!-- End Header container -->

        <!-- Start Main content container -->
        <main>
            <div>
                <section>
                  <h2> First section </h2>
                  <h1> Hi Web programmer </h1>

                  <ul>
                      <li> Web/ Internet Technology </li>
                      <li> Web framework            </li>
                      <li> Databases                </li>
                      <li> React, Next.js, Vue      </li>
                  </ul>

                  <div>
                      <button> Explore Portfolio  </button>
                      <button> Become my employer </button>
                  </div>
                </section>
            </div>
            <div>
                <section>
                  <h2> Second section </h2>
                  <p> &#8220; I'm dedicated to offer outstanding service &#8221; </p>

                  <ul>
                      <li> South African based but available for global markets  </li>
                      <li> Trust Index rating of 9.6 in development </li>
                      <li> Fast and reliable support  </li>
                  </ul>
                </section>
            </div>
        </main>
        <!-- End Main content container -->

        <!-- Start footer container -->
        <footer>
            <div>
                <span> 2020 &#64; dev-personal </span>
            </div>
        </footer>
        <!-- End footer container -->
    </div>
    <!-- End of wrapper container -->
  </body>
</html>

```

<a name="validate"></a>
#### /> Validate `landing page`

Here are some of the things validators *([w3 Mark-up validation service](https://validator.w3.org/) / [Nu Html Checker](https://validator.nu/))* check for:
+ The inclusion of a `DOCTYPE declaration`. Without declaration the validator doesn’t know which version of HTML or XHTML to validate against.
+ An indication of the character encoding for the document.
+ The inclusion of required rules and attributes.
+ Non-standard elements.
+ Mismatched tags.
+ Nesting errors.
+ Typos and other minor errors.

<a name="documentrender"></a>
#### /> Rendered landing page

*Results on browsers*
![layout design](./resources/rendered-index.png)

#### /> Merging home branch to main branch
*Now, execute the command below:*

``` sh

  git add Index.html # staged home branch
  git commit -m " First commit on home branch: Add landing page markup on Index.html "
  git checkout main
  git merge dakalo/home

```

*` Last modified: 2023-07-08 time: 19:02PM `*

***

<a name="webserver"></a>
### /> Move personal project to a *`local web server`*

*Up* until this point we have been loading all our *.html* page directly from the file-system. We now need to move `project source code` to the web server. This *section* will indicate how to download and run *setup* to start working with [*`Mongoose webserver`*](https://mongoose.ws/tutorials/tools/). This is one of the smallest *minimal static HTTP server* available that requires very minimal configuration.

*Several of the APIs we will be using in features as we build our website rely on web pages being served from a specific domain name – even if that domain is just `"localhost"` is still work perfect. Rather we can define our domain name as [ dev.personal:8000 ](http://dev.personal:8000/) instead of using [ localhost:8000 ](http://localhost:8000/)*

*The web browser uses the `domain name and port number` to determine the origin of a web page (port number usually is 80 or 443 defaults – but in this case it will listen on 8000).*

To *run* mongoose HTTP server to serve our web pages:

+ Download and install [`GCC / MinGW compiler`](#)
  + Set install destination to c:\
  + Accept suggested default settings.
  + Go to `c:\mingw32\bin` folder and rename `mingw32-make.exe` to `make.exe`.
  + Add `c:\mingw32\bin` to the Path environment variable.

  ``` sh

  gcc --version

  ```

  + Build and run mongoose _http-server_

  ``` sh

  git clone https://github.com/cesanta/mongoose
  cd mongoose/examples/http-server
  make mingw

  ```

  *Go to [http://localhost:8000](http://localhost:8000/) in your browser.*

*` Last modified: 2023-07-08 time: 19:02PM `*

***

<a name="splitsourcecode"></a>
### /> Split source code on `index.html`

*Now,* we need to `split source code` that we wrote earlier on: *`Index.html`*. To achieve this, we simply create a new file called *`Home.html`*, then we cut the main content of *`Index.html`* file and then paste the content on *`Home.html`*. Header and footer will remain on *`index.html`* file as shown below. We want to avoid duplication of code mainly *`header and footer`* since they appear in each module.

+ [Entry point  of *all module: Index.html*](#index)
+ [Module Home - Landing page](#home)

<a name="index"></a>
#### Entry point of all module : Index.html

This is the entry point of our website. We have now remove main content from *Index.html* and paste it on *home.html* file.

*@Index.hml*
``` html

<!DOCTYPE html> <!-- HTML5 document version declaration -->
<html>
  <head lang="en" dir="ltr">
    <meta charset ="utf-8" />
    <meta name    ="viewport" content="width=device-width, initial-scale=1.0" />

    <title> Home </title>

  </head>
  <body>
    <!-- Start of wrapper container -->
    <div>
        <!-- Start Header container -->
        <header>
            <div>
                <div> <span> My name </span> </div>
                <div>
                    <nav>
                        <ul>
                            <li> <a> Home      </a> </li>
                            <li> <a> About     </a> </li>
                            <li> <a> Skills    </a> </li>
                            <li> <a> Portfolio </a> </li>
                            <li> <a> Contact   </a> </li>
                        </ul>
                    </nav>
                </div>
                <p> You are welcome, you can view the site as you wish </p>
            </div>
        </header>
        <!-- End Header container -->

        <!-- Start Main content container -->
        <main></main>
        <!-- End Main content container -->

        <!-- Start footer container -->
        <footer>
            <div>
                <span> 2020 &#64; dev-personal </span>
            </div>
        </footer>
        <!-- End footer container -->
    </div>
    <!-- End of wrapper container -->
  </body>
</html>

```

<a name="home"></a>
#### Module Home - Landing page

+ [Create a file called *`Home.html`*](#chome)
+ [Add Home module source code or mark-up](#homemarkup)

<a name="chome"></a>
*Create a html file called: Home.html. the source code on this html document will be served as a default landing page*

``` sh

touch Home.html

```

<a name="homemarkup"></a>
*@Home.html*
*Add source code below to Home.html, this html document will be loaded by default because it contain source code to be rendered on landing page*

``` html

<div>
	<section>
	  <h2> First section </h2>
	  <h1> Hi Web programmer </h1>

	  <ul>
		  <li> Web/ Internet Technology </li>
		  <li> Web framework </li>
		  <li> Databases     </li>
		  <li> React, Next.js, Vue </li>
	  </ul>

	  <div>
		  <button> Explore Portfolio  </button>
		  <button> Become my employer </button>
	  </div>
	</section>
</div>
<div>
	<section>
	  <h2> Second section </h2>
	  <p> &#8220; I'm dedicated to offer outstanding service &#8221; </p>

	  <ul>
		  <li> South African based but available for global markets  </li>
		  <li> Trust Index rating of 9.6 in development </li>
		  <li> Fast and reliable support  </li>
	  </ul>
	</section>
</div>

```

#### /> Staged main branch and merge to `dakalo/home` branch
*Now, execute the command below:*

``` sh

  git add Index.html Home.html # staged main branch
  git commit -m " Second commit on main branch: Split source code on index.html. We have to file, Index.html and Home.html "
  git checkout dakalo/home
  git merge main
  git checkout main

```

*`Last modified: 2023-07-15, time: 17:57PM`*

***

<a name="entrypointLoadmodule"></a>
### /> Load module mark-up to *`Index.html`*

*Now,* we are going to create a custom JavaScript function to handle two things:
+ [Change `document title` to the active module.](#cdocumenttitle)
+ Load module content to `Index.html`
  + [Load `HTML document` to `main element`: `JavaScript, iframe element`.](#firstmethods) <span style="color:red;font-size:20px;">&#10006;</span>
  + [Load `HTML document` to `main element`: `JavaScript Ajax`.](#secondmethods)  <span style="color:green;font-size:20px;">&#10004;</span>
  + [Load `HTML document` to `main element`: `JavaScript Fetch API`.](#secondmethods) <span style="color:green;font-size: 20px;">&#10004;</span>

<a name="cdocumenttitle"></a>
#### Change `document title` to the active module.

We want html `document title` to dynamically change to an *`active module`*. When user request to access module mark-up, The html `document title` on entry point must dynamically change to the module name. *For instance: If user make a request to navigate to `about module`, the title of the document should be change to `About` etc. By default,* the html document title will be Home, because home module will be loaded by default.

*@./assets/js/*
*First, create a separate or external JavaScript document called View.js and link the*

``` sh

  touch View.js

```
*@Index.html*
*Next, link the external JavaScript document on entry point (Index.html) at the bottom of the document as shown below:*

``` html

    <!-- External JavaScript -->
    <script src="./assets/js/View.js"></script>
  </body>
</html>

```

*Below, we define one data attribute called `data-moduleName` to assign custom data: `home, about, skills, portfolio and contact`.*

``` html

<li> <a data-nav="home">      Home      </a> </li>
<li> <a data-nav="about">     About     </a> </li>
<li> <a data-nav="skills">    Skills    </a> </li>
<li> <a data-nav="portfolio"> Portfolio </a> </li>
<li> <a data-nav="contact">   Contact   </a> </li>

```

*Pseudo code for dynamicaly Change the document title*

+ Trigger `DOMContentLoaded` event interface
      document.addEventListener('DOMContentLoaded', callbackfunction
  + Define `const ` variable `HTMLDocumentModules`.
  + Get / select all element whose attribute is `data-nav`
        HTMLDocumentModules = document.querySelectorAll()
 + Loop through each module on `HTMLDocumentModules` nodeList element
		    HTMLDocumentModules.forEach(callbackfunction)
    + Trigger `onclick` event on `selected element` within the loop.
          HTMLDocumentModule.onclick(event,callbackfunction) /
          HTMLDocumentModule.addEventListener(event,callbackfunction)
      + Set html document title.
            document.title

*@View.js*

``` js

"use strict"

/* Dynamically change document title  */
document.addEventListener('DOMContentLoaded', () => {

	const HTMLDocumentModules = document.querySelectorAll("a[data-nav]")

	HTMLDocumentModules.forEach( HTMLDocumentModule => {
		HTMLDocumentModule.addEventListener('click', () => {
			document.title = HTMLDocumentModule.dataset.nav
		})
	})
})

```
<a name="firstmethods"></a>
####  Load `HTML document` to `main element`: `JavaScript, iframe`.

When user trigger *click* event on module link, the module markup must be loaded dynamically to an entry point into `main element`. In HTML we have element that loads another html document markup within the another html document markup. it is an `iframe` element. Using iframe is simple and effective. When the web browser encounters an `iframe` element, `it creates a new document environment to load the document`.

*However, AJAX (Asynchronous JavaScript And XML) can create more interactive and integrated sites than using an `iframe` to load another static html document.*

*Pseudo code for loading html document into another html document.*

+ Trigger `DOMContentLoaded` interface event
      document.addEventListener('DOMContentLoaded', callbackfunction
  + Define `const` variable *`iframe, modulePath`*.
  + Get / select iframe element
        iframe = document.querySelector()
  + Loop through each module on `HTMLDocumentModules` nodeList element
		    HTMLDocumentModules.forEach(callbackfunction)
    + Trigger *`onclick`* event on selected element within the loop.
          HTMLDocumentModule.onclick(event,callbackfunction) /
          HTMLDocumentModule.addEventListener(event,callbackfunction)
      + Assign `path` to `modulePath`.
      + Set attribute *src* value to be *`modulePath`*

*@View.js*

``` js

"use strict"

/* Dynamically load html document markup  */
const HTMLDocumentModules = document.querySelectorAll("a[data-nav]")
const iframe              = document.querySelector("#iframe")

HTMLDocumentModules.forEach( HTMLDocumentModule => {
  HTMLDocumentModule.onclick = () => {
    const modulePath  = `./modules/${HTMLDocumentModule.dataset.nav}.html`
    iframe.setAttribute("src", modulePath)
  }
})

```

*@Index.html*
*Within main element on `Index.html` we add &lt;`iframe`&gt; element as shown below.*

``` html

<main>
  <iframe id="iframe" title="moduleFile" src="./modules/Home.html"></iframe>
</main>  

```

##### *Iframe Caveats*

+ We can't directly interact with `inner iframe` element through parent window or document even though both html documents reside on the same domain.

  *As I said earlier, iframe is a very convenient way to display another html document on another html document but it's complicated if we want to have a single stylesheet or JavaScript on parent html document (top) to control both document.*

  *Suppose we want to change color of h1 element on the referenced module (Home.html), if the stylesheet is on the parent html document, it won't have effect of any h1 element inside of an iframe. `Iframe create a window on top of another window.` This means there's no communication channel between the two documents, therefore we need to establish communication channel between them. Two way communication between parent document and iFrame.*

  Stylesheet code below is on the external stylesheet document on entry point within head element of the parent document as shown below. The stylesheet code below will only have effect on the iframe element because it is an element on the parent html document.*

``` CSS
/* <link rel="stylesheet" type="text/css" href="./assests/css/styles.main.css" />
    Adds sylesheet properties: width, height and border to iframe. */

iframe {

  width : 100%;
  height: 400px;
  border: 01px solid #f1f1f1;

}

iframe h1 { color: red; }

```
<a name="secondmethods"></a>
#### Load `HTML document` to `main element`: *`JavaScript Ajax`*.

*Pseudo code to append content to html element from another html document.*

+ Trigger `DOMContentLoaded` interface event
      document.addEventListener( 'DOMContentLoaded', callbackfunction )
  + Get / select main element
          main = document.querySelector()
  + Loop through each module on `HTMLDocumentModules` nodeList element
		    HTMLDocumentModules.forEach( callbackfunction )
    + Trigger *`onclick`* event on selected element within the loop.
          HTMLDocumentModule.onclick( event, callbackfunction ) /
          HTMLDocumentModule.addEventListener( event, callbackfunction )
      + Define `let` variable called *`xhttp, file`*.
      + Create new `XMLHttpRequest` to assign to `xhttp` variable.
      + Assign  module name to `file` variable
      + Check if `file`
        + Define anonymous `function()`.
          + Check if this `readyState` status is done (4)
            + Check if this `status` is 200
              + Append respond to main element.
            + Check if this `status` is 404
              + Append `"404 : File not found"` string to main element.
        + Assign anonymous `function()` to onreadystatechange event.
              xhttp.onreadystatechange = function() {}
      + Initialize it: GET-request for the URL
            xhttp.open('GET', 'url', true)
      + Send the request: `xhttp.send()`

*@View.js*

``` js

"use strict"
xhttp.send()
const 	main				= document.querySelector('main')
const 	HTMLDocumentModules = document.querySelectorAll("a[data-nav]")

HTMLDocumentModules.forEach( HTMLDocumentModule => {
  HTMLDocumentModule.onclick = () => {
    document.title = HTMLDocumentModule.dataset.nav

    let xhttp = new XMLHttpRequest()
    let file  = `${HTMLDocumentModule.dataset.nav}.html`

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

```

####   Load `HTML document` to `main element`: `JavaScript Fetch API`

*In this section,* we use `JavaScript Fetch API interface` to make `asynchronous HTTP requests` to server from web browsers to fetch module content / markup. Fetch API is much simpler and cleaner. It uses the `Promise` to deliver more flexible features to make requests to servers from the web browsers. No need for XMLHttpRequest anymore.

*Pseudo code to append content to html element from another html document.*

+ Trigger `DOMContentLoaded` interface event
      document.addEventListener( 'DOMContentLoaded', callbackfunction )
  + Get / select main element
          main = document.querySelector()
  + Loop through each module on `HTMLDocumentModules` nodeList element
		    HTMLDocumentModules.forEach( callbackfunction )
    + Trigger *`onclick`* event on selected element within the loop.
          HTMLDocumentModule.onclick( event, callbackfunction ) /
          HTMLDocumentModule.addEventListener( event, callbackfunction )
      + Define `const` variable *`moduleName, modulePath`*.
      + Assign `path` to `modulePath`.
      + Pass `modulePath` as parameter on `getModuleFile` function
            getModuleFile( modulePath )
  + Define function called `getModuleFile` with file parameter variable
    + Define local variables called `moduleFile, moduleContent`
    + Fetch the *`url`* of the module file and assign to `moduleFile`
    + Check if `moduleFile` status is 200
      + Get module content and assign to `moduleContent`.
      + Append `moduleContent` to main element.
    + Check if `moduleFile` status is 404
        + Append `"Not found"` string to main element

*@View.js*

``` js

"use strict"

HTMLDocumentModules.forEach( HTMLDocumentModule => {
  HTMLDocumentModule.onclick = () => {
    const moduleName = onlyFirstLetterUpperCase( HTMLDocumentModule.dataset.nav )
    const modulePath = `./modules/${moduleName}.html`

    document.title	 = moduleName
    getModuleFile( modulePath )
  }
})

async function getModuleFile ( file ) {

  let moduleFile
  let moduleContent

  moduleFile = await fetch ( file )

  if( moduleFile.status == 200 ) {
    moduleContent = await moduleFile.text()
    main.innerHTML = moduleContent
  }else if ( moduleFile.status == 404 ) {
    main.innerHTML = '<h1> 404 Not found. </h1>'
  }
}

const onlyFirstLetterUpperCase = (word) => {
  return (word.charAt(0).toUpperCase() +
      word.slice(1 , word.length).toLowerCase())
}

```

#### /> Staged main branch and merge to `dakalo/home` branch
*Now, execute the command below:*

``` sh

  git add View.js # staged main branch
  git commit -m " Third commit on main branch: Load module mark-up to Index.html using Fetch API, second merge to dakalo/home branch"
  git checkout dakalo/home
  git merge main

```

*` Last modified: 2023-07-16 time: 09:41AM `*
