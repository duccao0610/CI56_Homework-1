class Employee {
    name;
    taskList = [];

    constructor(name, taskList) {
        this.name = name;
        this.taskList = taskList;
    }

    displayInfo() {
        console.log('name: ' + this.name);
        console.log('task list: ' + this.taskList);
    }
}