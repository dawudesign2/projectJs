import Element from "../class/ElementHtml.js";

const header =  () => { 
    const elm = new Element();
    elm.createElement("header","body",[{className:"header"}]);
    elm.createElement("nav","header",[{className:"nav"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"Home"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"Services"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"Blog"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"Contact"}]);

    elm.createElement("div","header",[{className:"logo"}]);
    elm.createElement("img", ".logo", [{className:"logo-img", src:"src/img/D2.png" , alt:"logo"}]);

    elm.createElement("div","body",[{className:"header-content"}]);
    elm.createElement("div",".header-content",[{className:"container-left"}]);
    elm.createElement("h1",".container-left",[
        {
            className:"header-title", 
            textContent:"Helping people enhance their projects with quality software."
        }
    ]);
    elm.createElement("div",".container-left",[{className:"header-text"}]);
    elm.createElement('a', '.header-text', [{className:"nav-text one", href:"#", textContent:"Contact us"}]);
    elm.createElement('a', '.header-text', [{className:"nav-text two", href:"#", textContent:"Your project here"}]);

    elm.createElement("div",".header-content",[{className:"container-right"}]);
    elm.createElement("canvas",".container-right",[{className:"header-canvas"}]);

}

export default header;