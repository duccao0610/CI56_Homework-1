const $template = document.createElement("template");
$template.innerHTML = /*html*/` 
        <div>
            <button id="answer" type="submit"></button>
        </div>
`;

export default class AnswerWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$answer = this.shadowRoot.getElementById("answer");
    }

    static get observedAttributes() {
        return ["answer"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "answer") {
            this.$answer.innerHTML = newValue;
        }
    }

    connectedCallback() {
        this.$answer.onclick = () => {
            console.log(this.$answer.innerHTML);
        }
    }
}

window.customElements.define("answer-wrapper", AnswerWrapper);