import { getDataApi, randomAnswers } from "../utils.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/`
    <question-wrapper id="question"></question-wrapper>
    <all-answers-wrapper id="answers"></all-answers-wrapper>
`;

export default class MainScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$question = this.shadowRoot.getElementById("question");
        this.$answers = this.shadowRoot.getElementById("answers");
    }

    async connectedCallback() {
        let data = await getDataApi("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple");
        let results = data.results;
        console.log(data);
        this.$question.setAttribute("question", results[0].question);

        let answers = results[0].incorrect_answers;
        answers.push(results[0].correct_answer);
        randomAnswers(answers);
        console.log(answers);

        this.$answers.setAttribute("answers", JSON.stringify(answers));
        this.$answers.setAttribute("correct-answer", answers.correct_answer);
    }
}

window.customElements.define("main-screen", MainScreen);