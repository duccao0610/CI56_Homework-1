const $template = document.createElement("template");
$template.innerHTML = /*html*/`
    <style>
        #container {
            text-align: center;
        }
    </style>
    <div id="container">
        <h3 id="question"></h3>
    </div>
`;

export default class QuestionWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$question = this.shadowRoot.getElementById("question");
    }

    static get observedAttributes() {
        return ["question"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "question") {
            this.$question.innerHTML = newValue;
        }
    }
}

window.customElements.define("question-wrapper", QuestionWrapper);
