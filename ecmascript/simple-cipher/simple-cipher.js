class Cipher {
    constructor(key) {

        if (key == '') {
            throw new Error('Bad Key');
        }

        if (isNaN(key) == false) {
            throw new Error('Bad Key');
        }

        if (/\d/.test(key) || /[A-Z]/.test(key)) {
            throw new Error('Bad Key');
        }

        if (key == null) {
            this.key = 'aaaaaaaaaa';
        } else {
            this.key = key
        }
    }

    encode() {
        return this.key.substr(0, 10);
    }

    decode() {

    }
}

export default Cipher;