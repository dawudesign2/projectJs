import Element from "../class/ElementHtml.js";

const header =  () => { 
    const elm = new Element();
    elm.createElement("header","body",[{className:"header"}]);
    elm.createElement("nav","header",[{className:"nav"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"Home"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"About"}]);
    elm.createElement('a', 'nav', [{className:"nav-link", href:"#", textContent:"Contact"}]);

    elm.createElement("div","header",[{className:"logo"}]);
    elm.createElement("img", ".logo", [{className:"logo-img", src:"src/img/D2.png" , alt:"logo"}]);

    elm.createElement("div","body",[{className:"header-content"}]);
    elm.createElement("div",".header-content",[{className:"container"}]);
    elm.createElement("h1",".container",[
        {
            className:"header-title", 
            textContent:"Helping people enhance their projects with quality software."
        }
    ]);
    //elm.createElement("img",".container",[{className:"header-img", src:"src/img/dws.png" , alt:"logo"}]);

}

export default header;