const $template = document.createElement("template");
$template.innerHTML = /*html*/`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <div id="budget-container" class="d-flex">
        <p id="budget">Current budget here</p>
        <button id="lend-button" class="btn btn-primary">Cho vay</button>
    </div>
`;

export default class BudgetContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('budget-container', BudgetContainer);