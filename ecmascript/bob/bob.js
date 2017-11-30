/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
    constructor(bob) {
        this.bob = bob;
    }
    hey(message) {
        if (message.trim() === '') {
            return 'Fine. Be that way!';
        }

        const temLetra = message.match(/[a-zA-Z]/);
        if (temLetra && message === message.toUpperCase()) {
            return 'Whoa, chill out!';
        }

        const end = message.slice(-1);
        if (end === '?') {
            return 'Sure.';
        }

        return 'Whatever.';
    }
}

export default Bob;