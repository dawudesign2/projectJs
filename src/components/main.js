import Element from "../class/ElementHtml.js";

const main = () => {
    const elm = new Element();
    elm.createElement("main","body",[{className:"main"}]);
    elm.createElement("section","main",[{className:"about"}]);
    elm.createElement("div",".about",[{className:"about-boxes"}]);
    elm.createElement("div",".about-boxes",[{className:"about-box one"}]);
    elm.createElement("div",".about-boxes",[{className:"about-box two"}]);
    elm.createElement("div",".about-boxes",[{className:"about-box three"}]);

    elm.createElement("div",".about",[{className:"about-content"}]);
    elm.createElement("div",".about-content",[{className:"about-text"}]);
    elm.createElement("h1",".about-text",[{
        className:"about-title",
        innerHTML:"The agency was created in 2011 <span> around three pillars </span>",
    }]);
    elm.createElement("p",".about-text",[{  
        className:"about-text-p",   
        textContent:"Whether you want to start your business, grow your business or give it a new direction. Get the best strategies to achieve your goals and grow your business"}
    ]);
}


export default main;