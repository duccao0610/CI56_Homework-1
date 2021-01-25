export class Manager {
    constructor(admin) {
        this.admin = admin;
        this.allItems = [];
        this.soldItems = [];
    }
    rev() {
        let rev = 0;
        for (let i = 0; i < this.soldItems.length; i++) {
            rev = rev + (this.soldItems[i].price * (100 - this.soldItems[i].discount) / 100);
        }
        return rev;
    }
    sell(id) {
        for (let i = 0; i < this.allItems.length; i++) {
            if (this.allItems[i].id == id) {
                this.soldItems.push(this.allItems[i]);
                this.allItems.splice(i, 1);
            }
        }
    }
}