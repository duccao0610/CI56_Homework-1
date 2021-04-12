const $template = document.createElement("template");
$template.innerHTML = /*html*/`
    <form>
        <input id="input" placeholder="Input your name">
        <button id="btn" type="submit">Play</button>
    </form>
`;

export default class LoginScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$input = this.shadowRoot.getElementById("input");
        this.$btn = this.shadowRoot.getElementById("btn");
    }

    connectedCallback() {
        this.$btn.onclick = () => {
            if (this.$input.value == "") alert("Don't leave this field empty");
            sessionStorage.setItem("player", this.$input.value);
            sessionStorage.setItem("score", "0");

            router.navigate('/main');
        }
    }
}

window.customElements.define("login-screen", LoginScreen);