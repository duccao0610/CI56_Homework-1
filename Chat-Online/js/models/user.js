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
    } else {
        alert('This email has been registered before!')
    }

    alert('Register successfully');
}

export function logIn() {

}

export function getUserInfo() {

}

// xử lý bất đồng bộ: callback, promise, async/await
// chỗ nào có promise -> có await -> có async