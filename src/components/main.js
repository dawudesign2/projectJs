import Element from "../class/ElementHtml.js";

const main = () => {
    const elm = new Element();
    elm.createElement("main","body",[{className:"main"}]);
    elm.createElement("section","main",[{className:"about"}]);
}


export default main;