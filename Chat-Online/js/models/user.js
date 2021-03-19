import { md5 } from '../models/utils.js';

export async function register(name, email, password) {
    let response = await firebase.firestore()
        .collection('users')
        .where('email', '==', email)
        .get();

    if (response.empty) {
        await firebase.firestore().collection('users').add({
            name: name,
            email: email,
            password: md5(password)
        });
        alert('Register successfully');
    } else {
        alert('This email has been registered before!')
    }
}

export async function logIn(email, password) {
    let response = await firebase.firestore()
        .collection('users')
        .where('email', '==', email)
        .get();

    password = md5(password);

    if (!response.empty) {
        console.log(response);
        console.log(password);
    } else {
        alert('Incorrect email or password');
    }
}

export function getUserInfo() {

}