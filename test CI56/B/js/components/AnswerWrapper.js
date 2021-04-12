const $template = document.createElement("template");
$template.innerHTML = /*html*/` 
        <link rel="stylesheet" href="./css/myStyle.css">
        <style>
            #container {
                text-align: center;
            }
        </style>

        <div id="container">
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
        return ["answer", "correct"];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "answer") {
            this.$answer.innerHTML = newValue;
        }

    }

    connectedCallback() {
        this.$answer.onclick = () => {
            if (this.getAttribute("correct") == "true") {
                let score = JSON.parse(sessionStorage.getItem("score"));
                score += 10;
                sessionStorage.setItem("score", JSON.stringify(score));
                alert("Correct! Your current score is " + score + ".");
            }
            if (this.getAttribute("correct") == "false") {
                let score = JSON.parse(sessionStorage.getItem("score"));
                let player = sessionStorage.getItem("player");
                alert("Wrong answer. Player " + player + " has scored " + score + " points. Let's try again.");
                sessionStorage.setItem("score", "0");
            }
            let $app = document.getElementById("app");
            let $newQuestion = document.createElement("main-screen");
            $app.innerHTML = "";
            $app.appendChild($newQuestion);
        }
    }
}

window.customElements.define("answer-wrapper", AnswerWrapper);