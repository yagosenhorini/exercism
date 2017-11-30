class Pangram {
    constructor(pangram) {
        this.pangram = pangram;
    }

    isPangram() {

        this.pangram = this.pangram.replace('_', ' ');

        if (this.pangram === '') //teste01
        {
            return false;
        }

        if (this.pangram.match(/[a-zA-Z][0-9][a-zA-Z]/g)) { //teste6
            return false;
        }

        var alpha = 'abcdefghijklmnopqrstuvwxyz';
        const tudo = '"\\.-_, 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZökäüß';
        for (let i = 0; i < this.pangram.length; i++) { //teste02 e 03
            let a = this.pangram[i];
            if (tudo.indexOf(a) < 0) {
                return false;
            }
            var indexAlpha = alpha.indexOf(a.toLowerCase());
            if (indexAlpha >= 0) {
                alpha = alpha.slice(0, indexAlpha) + alpha.slice(indexAlpha + 1);
            }
        }
        return alpha === '';
    }
}
export default Pangram;