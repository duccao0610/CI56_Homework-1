export class MemeCollection {
    memes = [];

    constructor(id, name, owner, memes) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    }
    add(meme) {
        this.memes.push(meme);
    }
    update(id, data) {
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes[i].update(data);
            }
        }
    }
    delete(id) {
        for (let i = 0; i < this.memes.length; i++) {
            if (id == this.memes[i].id) {
                this.memes.splice(i, 1);
            }
        }
    }
    show() {
        $('#colId').html(`Collection's ID: ${this.id}`);
        $('#colName').html(`Collection's name: ${this.name}`);
        $('#colOwner').html(`Collection's owner: ${this.owner}`);
        for (let i = 0; i < this.memes.length; i++) {
            if (i != this.memes.length - 1) {
                $('#colMemes').append(`${this.memes[i].name}, `);
            } else {
                $('#colMemes').append(`${this.memes[i].name}`);
            }
        }
    }
}