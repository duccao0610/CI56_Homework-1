import { randomAnswers } from "../utils.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/`
    <form id="all-answers">
          
    </form>
`;

export default class AllAnswersWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$allAnswers = this.shadowRoot.getElementById("all-answers");
    }

    static get observedAttributes() {
        return ["answers", "correct-answer"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "answers") {
            let answers = JSON.parse(newValue);
            let correctAnswer = this.getAttribute("correct-answer");
            for (let i = 0; i < answers.length; i++) {
                let $answer = document.createElement("answer-wrapper");
                if (answers[i] == correctAnswer) {
                    $answer.setAttribute("correct", "true");
                } else {
                    $answer.setAttribute("correct", "false");
                }
                $answer.setAttribute("answer", answers[i]);
                this.$allAnswers.appendChild($answer);
            }
            console.log(correctAnswer);
        }
    }
    connectedCallback() {
        this.$allAnswers.onsubmit = () => {
        }
    }
}

window.customElements.define("all-answers-wrapper", AllAnswersWrapper);