class PrimeFactors {
    constructor(primos) {
        this.primos = primos;
    }

    for (factor) {
        var divisor = [];
        for (let i = 2; i <= factor; i++) {
            if (factor % i == 0) {
                divisor.push(i);
                factor = factor / i;
                console.log(factor);
                i = 1;
            }

        }
        return divisor;

    }

}

export default PrimeFactors;