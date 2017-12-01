class Binary {
    constructor(binary) {
        this.binary = binary;
    }

    toDecimal() {
            var char = 'abcdefghijklmnopqrstuvwxyz23456789';
            var bin = this.binary;
            var result = parseInt(bin, 2);
            for (let i = 0; i < bin.length; i++) {
                let a = bin[i];
                if (char.indexOf(a) >= 0) {
                    return 0;
                }
            }
            return result;


        }
        /*Or, do this fucking if. 
        if (bin.match(/[a-zA-Z2-9]/g)) {
            return 0;
         } else {
             return result;
        }*/


}

export default Binary;