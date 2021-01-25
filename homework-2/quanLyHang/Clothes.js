import { Goods } from './Goods.js';

export class Clothes extends Goods {
    discount = 5;
    constructor(id, name, price, manu, dateMod, origin, material) {
        super(id, name, price, manu, dateMod);
        this.origin = origin;
        this.material = material;
    }
}