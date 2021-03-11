const $template = document.createElement('template');
$template.innerHTML = `
    <div id="InfoContainer" style="margin-left: 10px">
        <p id='name'></p>
        <p id='age'></p>
        <p id='address'></p>
    </div>
`;

export default class InfoContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$name = this.shadowRoot.getElementById('name');
        this.$age = this.shadowRoot.getElementById('age');
        this.$address = this.shadowRoot.getElementById('address');
    }

    static get observedAttributes() {
        return ['name', 'age', 'address'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'name') {
            this.$name.innerHTML = newValue;
        } else if (attrName == 'age') {
            this.$age.innerHTML = newValue;
        } else if (attrName == 'address') {
            this.$address.innerHTML = newValue;
        }
    }
}

window.customElements.define('info-container', InfoContainer);