class Transcriptor {

    toRna(values) {
        var ret = '';
        for (var index in values) {
            const value = values[index];
            if (value === 'G') {
                ret += 'C';
            }

            if (value === 'C') {
                ret += 'G';
            }

            if (value === 'T') {
                ret += 'A';
            }
            if (value === 'A') {
                ret += 'U';
            }
            if (value === 'U') {
                throw new Error('Invalid input DNA.');
            }
            if (values.includes('XXX')) {
                throw new Error('Invalid input DNA.');
            }
            console.log(values);
        }
        return ret.toString();

    }
}

export default Transcriptor;