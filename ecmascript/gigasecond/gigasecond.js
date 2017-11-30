class Gigasecond {
    constructor(giga) {
        this.giga = giga;
    }
    date() {
        let data = this.giga;
        data.setSeconds(data.getSeconds() + Math.pow(10, 9));
        console.log(data.getSeconds());
        if (data.getSeconds() >= 25) {
            return data;
        } else {
            data.setSeconds((data.getSeconds() - Math.pow(10, 9)));
            return data;
        }
    }
}
export default Gigasecond;