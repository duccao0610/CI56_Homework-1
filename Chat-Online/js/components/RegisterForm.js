import { register } from '../models/user.js'

const $template = document.createElement('template');
$template.innerHTML = /*html*/`
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <form  id="register-form" class="p-3">
        <h2 class="text-center">Create an account</h2>
        <p class="text-muted text-center">and let's not be lonely anymore</p>
        <input-wrapper id="name" type="text" placeholder="Your name"></input-wrapper>
        <input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
        <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
        <input-wrapper id="password-confirmation" type="password" placeholder="Password confirmation"></input-wrapper>
        <button class="btn btn-primary btn-block">Register</button>
    </form>
`;

export default class RegisterForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$registerForm = this.shadowRoot.getElementById('register-form');
        this.$name = this.shadowRoot.getElementById('name');
        this.$email = this.shadowRoot.getElementById('email');
        this.$password = this.shadowRoot.getElementById('password');
        this.$passwordConfirmation = this.shadowRoot.getElementById('password-confirmation');
    }

    connectedCallback() {
        this.$registerForm.onsubmit = (event) => {
            event.preventDefault();

            let name = this.$name.value;
            let email = this.$email.value;
            let password = this.$password.value;

            function require(value) {
                return value != '';
            }

            function confirmPassword(value) {
                return value == password;
            }

            function validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }

            let isPassed = this.$name.validate(require, 'Input your name') &
                (
                    this.$email.validate(require, 'Input your email') &&
                    this.$email.validate(validateEmail, 'Wrong email format')
                ) &
                this.$password.validate(require, 'Input your password') &
                (
                    this.$passwordConfirmation.validate(confirmPassword, 'Password did not match') &&
                    this.$passwordConfirmation.validate(require, 'Confirm your password')
                )

            if (isPassed) {
                register(name, email, password);
            }
        }
    }
}


window.customElements.define('register-form', RegisterForm);