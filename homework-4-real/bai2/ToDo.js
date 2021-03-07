const $template = document.createElement('template');

$template.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <div class="jumbotron" style="height: fit-content">
        <h4 id="name">Nhiệm vụ: </h4>
        <p id="description">Mô tả: </p>
        <p id="deadline">Deadline: </p>
        <p id="status">Trạng thái: </p>
    </div>
`;

export default class ToDo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$name = this.shadowRoot.getElementById('name');
        this.$description = this.shadowRoot.getElementById('description');
        this.$deadline = this.shadowRoot.getElementById('deadline');
        this.$status = this.shadowRoot.getElementById('status');
    }

    static get observedAttributes() {
        return ['name', 'description', 'deadline', 'status'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'name') {
            this.$name.innerHTML = 'Tên: ' + newValue;
        } else if (attrName == 'description') {
            this.$description.innerHTML = 'Mô tả: ' + newValue;
        } else if (attrName == 'deadline') {
            this.$deadline.innerHTML = 'Deadline: ' + newValue;
        } else if (attrName == 'status') {
            this.$status.innerHTML = 'Trạng thái: ' + newValue;
        }
    }
}

window.customElements.define('to-do', ToDo);