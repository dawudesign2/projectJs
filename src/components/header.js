import Element from "../class/ElementHtml.js";

const header =  () => { 
    const elm = new Element();
    elm.createElement("header","body",[{className:"header"}]);
    elm.createElement("nav","header",[{className:"nav"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"Home"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"About"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"Contact"}]);
}

export default header;