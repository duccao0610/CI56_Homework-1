import { logIn } from '../models/user.js';
import { require, validateEmail } from '../models/utils.js';

const $template = document.createElement('template');
$template.innerHTML = /*html*/`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <form  id="login-form" class="p-3">
        <h2 class="text-center">Login to your account</h2>
        <p class="text-muted text-center">and let's not be lonely anymore</p>
        <input-wrapper id="email" type="email" placeholder="email"></input-wrapper>
        <input-wrapper id="password" type="password" placeholder="password"></input-wrapper>
        <button class="btn btn-primary btn-block">Login</button>
    </form>
`;

export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$LoginForm = this.shadowRoot.getElementById('login-form');
        this.$email = this.shadowRoot.getElementById('email');
        this.$password = this.shadowRoot.getElementById('password');
    }


    // được gọi 1 lần duy nhất khi thẻ hiển thị trong body lần đầu tiên
    connectedCallback() {
        this.$LoginForm.onsubmit = (event) => {
            event.preventDefault();
            let email = this.$email.value;
            let password = this.$password.value;

            let isPassed = (this.$email.validate(require, "Input your email") &&
                this.$email.validate(validateEmail, "Wrong email format")
            ) &
                this.$password.validate(require, "Input your password");

            if (isPassed) {
                logIn(email, password);
            }
        }
    }

    // action trong thẻ form là đích khi submit
}

window.customElements.define('login-form', LoginForm);