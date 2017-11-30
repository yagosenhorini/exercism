class Binary {
    constructor(binary) {
        this.binary = binary;
    }

    toDecimal() {
        let bin = this.binary;
        var result = parseInt(bin, 2);
        if (bin.match(/[a-zA-Z2-9]/g)) {
            return 0;
        } else {
            return result;
        }
    }
}

export default Binary;