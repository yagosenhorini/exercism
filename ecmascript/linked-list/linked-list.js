class Node {
    constructor(data, next = null, prev = null) {
        this._data = data;
        this._next = next;
        this._prev = prev;
    }

    get data() {
        return this._data;
    }

    get next() {
        return this._next;
    }
    set next(value) {
        this._next = value;
    }

    get prev() {
        return this._prev;
    }

    set prev(value) {
        this._prev = value;
    }

}

export default class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.cont = 0;
    }

    push(list) {
        if (this.first == null) {
            this.first = this.last;
        }
    }

    pop(value) {

    }

    shift(value) {

    }

    unshift(value) {

    }
}