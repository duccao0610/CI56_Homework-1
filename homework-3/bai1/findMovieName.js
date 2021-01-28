async function findMovie(input) {
    let movies = await firebase.firestore().collection('movies').get();

    for (let movie of movies.docs) {
        let inputRegex = new RegExp(input, 'i');
        if (movie.data().name.match(inputRegex)) {
            console.log(movie.data());
        }
    }
}

// async function findMovie(input) {
//     let movies = await firebase
//         .firestore()
//         .collection('movies')
//         .where('name', '>=', input)
//         .where('name', '<=', input + '~')
//         .get();

//     for (let movie of movies.docs) {
//         console.log(movie.data());
//     }
// }
// findMovie('Be with');