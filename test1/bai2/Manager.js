class Manager extends Employee {
    name;
    taskList;
    careList = [];

    constructor(name, taskList, careList) {
        super(name, taskList);
        this.careList = careList;
    }

    addEmployee(e) {
        this.careList.push(e);
    }

    displayInfo() {
        console.log('name: ' + this.name);
        console.log('task list: ' + this.taskList);
        console.log('care list: ' + this.careList);
    }
}