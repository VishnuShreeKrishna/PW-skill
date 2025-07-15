function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.setAttribute("href", reactElement.props.href);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute("target", reactElement.props.target);

    container.appendChild(domElement);
}
const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank",
    },
        children: "Click me to Google",
}


const mainContainer = document.querySelector("#root");
