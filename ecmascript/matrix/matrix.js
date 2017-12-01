class Matrix {
    constructor(texto) {
        this.matriz = texto;
        this.rows = [];

        var a = this.matriz.split('\n');
        var b = a[0].split('');
        var c = b[0].toString();
        console.log(b);
        this.rows.push(parseInt(b));
        console.log(this.rows);
    }
}
export default Matrix;