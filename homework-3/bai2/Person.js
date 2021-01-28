export default class Person {
    name;
    age;
    relatives = [];

    constructor(name, age, relatives) {
        this.name = name;
        this.age = age;
        this.relatives = relatives;

        firebase.firestore().collection('people').add({
            name: this.name,
            age: this.age,
            relatives: this.relatives
        })
    }
}
