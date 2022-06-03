class ElementHtml {
    /*
    * @param {string} tagName
    * @param {array} children
    * @return {object}
    */
    createElement(tagName, parent = null, options = []) {
       const element = document.createElement(tagName); // Création of élément
        options && options.forEach(option => {
            option && option.src && (element.src = option.src);
            option && option.alt && (element.alt = option.alt);
            option && option.href && (element.href = option.href);
            option && option.name && (element.textContent = option.name);
            option && option.className && (element.className = option.className);
            option && option.id && (element.id = option.id);
            option && option.type && (element.type = option.type);
            option && option.value && (element.value = option.value);
            option && option.placeholder && (element.placeholder = option.placeholder);
            option && option.textContent && (element.textContent = option.textContent);
            option && option.style && (element.style = option.style);
        });
        parent ? document.querySelector(parent).appendChild(element) : document.body.appendChild(element); // add element in the DOM
    }
}

export default ElementHtml;