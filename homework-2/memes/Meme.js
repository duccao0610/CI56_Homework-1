export class Meme {
    constructor(id, name, image, dateModified) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
    }
    show() {
        $("#name").html(`Meme's name: ${this.name}`);
        $("#image").attr("src", `${this.image}`);
        $("#dateModified").html(`Date modified: ${this.dateModified}`);
    }
    update(data) {
        this.name = data.name;
        this.image = data.image;
    }
}