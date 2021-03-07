import FilmContainer from './FilmContainer.js'

let data = [
    { id: 1, name: 'Phim 1', image: 'https://dummyimage.com/600x400/000/fff', duration: '24 phút/tập' },
    { id: 2, name: 'Phim 2', image: 'https://dummyimage.com/600x400/000/fff', duration: '30 phút/tập' },
    { id: 3, name: 'Phim 3', image: 'https://dummyimage.com/600x400/000/fff', duration: '45 phút/tập' },
    { id: 4, name: 'Phim 4', image: 'https://dummyimage.com/600x400/000/fff', duration: '24 phút/tập' },
    { id: 5, name: 'Phim 5', image: 'https://dummyimage.com/600x400/000/fff', duration: '10 phút/tập' },
    { id: 6, name: 'Phim 6', image: 'https://dummyimage.com/600x400/000/fff', duration: '15 phút/tập' },
];

let $filmContainer = document.getElementsByTagName('film-container');
for (let i = 0; i < data.length; i++) {
    $filmContainer[i].setAttribute('name', data[i].name);
    $filmContainer[i].setAttribute('image', data[i].image);
    $filmContainer[i].setAttribute('duration', data[i].duration);
}