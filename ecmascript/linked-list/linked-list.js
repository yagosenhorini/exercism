export default class LinkedList {
    constructor(prev) {
        this.prev = prev;
        this.next = null;
        this.value = null;
        this.first = null;
        this.last = null;
        this._count = 0;
    }


    push(n) {
        if (this.last == null) {
            if (this.value !== null) {
                if (this.next === null) {
                    this.next = new LinkedList();
                }
                this.next.push(n);
            } else {
                this.value = n;
            }
        } else {
            this.last = this.last.next = new LinkedList(this);
        }
        this._count++;
    }

    pop() {
        if (this.next !== null) {
            var retorno = this.next.pop();
            if (retorno !== null) {
                return retorno;
            }
        }
        var ret = this.value;
        this.value = null;
        return ret;
        this._count--;
    }


    shift() {
        if (this.value !== null) {
            var valor = this.value;
            if (this.next !== null) {
                this.value = this.next.value;
                if (this.next.next !== null) {
                    this.next = this.next.next;
                }
                return valor;
                this._count--;
            }
        }

    }

    unshift(n) {
        if (this.value !== null) {
            var atual = this.value;
            this.value = n;
            if (this.next !== null) {
                var prox = this.next;
                this.next = new LinkedList();
                this.next.value = atual;
                this.next.next = prox;
            } else {
                this.next = new LinkedList();
                this.next.value = atual;
            }
        } else {
            this.value = n;
        }
        this._count++;
    }

    count() {
        return this._count;
    }

}