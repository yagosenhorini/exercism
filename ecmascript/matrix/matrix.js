class Matrix {
    constructor(texto) {
        this.matriz = texto;
        this.rows = [];
        this.rows[0] = [];
        this.rows[1] = [];

        var a = this.matriz.split('\n');
        var b = a[0].split(' ');
        console.log(b);
        this.rows.push(parseFloat(b));
        console.log(this.rows);
    }
}
export default Matrix;