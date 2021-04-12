import { getDataApi, randomAnswers } from "../utils.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/`
    <button id="btn-logout">Log out</button>
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
        this.$btnLogout = this.shadowRoot.getElementById("btn-logout");
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

        this.$answers.setAttribute("correct-answer", results[0].correct_answer);
        this.$answers.setAttribute("answers", JSON.stringify(answers));

        this.$btnLogout.onclick = () => {
            sessionStorage.setItem("player", "");
            sessionStorage.setItem("score", "");
            router.navigate('/login');
        }
    }
}

window.customElements.define("main-screen", MainScreen);