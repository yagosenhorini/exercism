class Matrix {
    constructor(texto) {
        this.matriz = texto;
        this.rows = [];
        this.columns = [];

        var a = this.matriz.split('\n');

        for (let i = 0; i < a.length; i++) {
            this.rows[i] = a[i].split(' ');

            for (let j = 0; j < this.rows[i].length; j++) {
                var temp = this.rows[i];
                temp[j] = Number(temp[j]);
            }

        }

    }

}
export default Matrix;