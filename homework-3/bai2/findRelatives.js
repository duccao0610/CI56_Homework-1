import Person from './Person.js';

export default async function findRelatives(name) {
    let allPeople = await firebase.firestore().collection('people').get();
    for (let person of allPeople.docs) {
        console.log(person.data().relatives);
    }
}
