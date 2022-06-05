import Element from "../class/ElementHtml.js";
import carousel from "../components/carousel.js";


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
    elm.createElement("div",".container-right",[{className:"carousel"}]);
    elm.createElement("div",".carousel",[{className:"slides", id:"slides"}]);
    fetch("../src/data/carousel.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            elm.createElement("img",".slides",[
                {className:"slide", src:element.src, alt:element.alt},
            ]);
        });
    });
    
    elm.createElement("div",".carousel",[{className:"controls"}]);
    elm.createElement("div",".controls",[{className:"control control-prev", textContent: '<'}]);
    elm.createElement("div",".controls",[{className:"control control-next", textContent: '>'}]);

    carousel();

}

export default header;


