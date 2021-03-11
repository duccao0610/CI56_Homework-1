const $template = document.createElement('template');
$template.innerHTML = `
    <div style="border: solid; margin: 10px; padding: 10px">
        <h2 id="courseName">Course name</h2>
        <h3 id="status"></h3>
    </div>
`;

export default class CourseContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$courseName = this.shadowRoot.getElementById('courseName');
        this.$teacher = this.shadowRoot.getElementById('teacher');
        this.$students = this.shadowRoot.getElementById('students');
        this.$status = this.shadowRoot.getElementById('status');
    }

    static get observedAttributes() {
        return ['course-name', 'teacher', 'students', 'status'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'course-name') {
            this.$courseName.innerHTML = newValue;
            // } else if (attrName == 'teacher') {
            //     let teacherInfo = JSON.parse(newValue);
            //     for (let property in teacherInfo) {
            //         let $teacherInfo = document.createElement('p');
            //         $teacherInfo.innerHTML = property + ': ' + teacherInfo[property];
            //         $teacherInfo.setAttribute('style', 'margin-left: 10px;');
            //         this.$teacher.appendChild($teacherInfo);
            //     }
            // } else if (attrName == 'students') {
            //     let studentList = JSON.parse(newValue);
            //     for (let student of studentList) {
            //         let $studentContainer = document.createElement('div');
            //         for (let property in student) {
            //             let $studentInfo = document.createElement('p');
            //             $studentInfo.innerHTML = property + ': ' + student[property];
            //             if (property == 'name') {
            //                 $studentInfo.setAttribute('style', 'font-style: italic; margin-left: 10px');
            //             } else {
            //                 $studentInfo.setAttribute('style', 'margin-left: 20px')
            //             }
            //             $studentContainer.appendChild($studentInfo);
            //         }
            //         this.$students.appendChild($studentContainer);
            //     }
        } else if (attrName == 'status') {
            this.$status.innerHTML = 'Status: ' + newValue;
        }
    }
}

window.customElements.define('course-container', CourseContainer);