import { Meme } from './Meme.js';
import { MemeCollection } from './MemeCollection.js';

let meme1 = new Meme(1, "dafuq", "https://i.kym-cdn.com/entries/icons/mobile/000/008/491/dafuq.jpg", "25/01/2020");
let meme2 = new Meme(2, "stoink", "https://i.kym-cdn.com/entries/icons/facebook/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg", "24/01/2020");
let meme3 = new Meme(3, "drake", "https://i.kym-cdn.com/photos/images/original/001/214/406/93c.jpg", "22/01/2020");

let myCol = new MemeCollection(1, "my collection", "Hung", [meme1, meme2]);

myCol.add(meme3);
myCol.update(2, { name: 'surprise', image: 'https://i.pinimg.com/736x/36/17/5b/36175b59a410422feda2300bbb08498e.jpg' });
myCol.delete(1);
myCol.show();