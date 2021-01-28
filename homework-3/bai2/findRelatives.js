import Person from './Person.js';

export default async function findRelatives(name) {
    let allPeople = await firebase.firestore().collection('people').get();
    let queue = [];
    let confirmed = [];
    for (let person of allPeople.docs) {
        if (person.data().name == name) {
            confirmed.push(name);
            for (let i = 0; i < person.data().relatives.length; i++) {
                confirmed.push(person.data().relatives[i]);
                queue.push(person.data().relatives[i]);
            }
        }
    }
    for (let i = 0; i < queue.length; i++) {
        for (let person of allPeople.docs) {
            if (person.data().name == queue[i]) {
                for (let j = 0; j < person.data().relatives.length; j++) {
                    if (confirmed.includes(person.data().relatives[j]) == false) {
                        confirmed.push(person.data().relatives[j]);
                        queue.push(person.data().relatives[j]);
                    }
                }
            }
        }
    }
    console.log('confirmed relatives: ', confirmed);
}
