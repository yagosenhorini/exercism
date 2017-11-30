class SpaceAge {
    constructor(space) {
        this.space = space;
        this.seconds = space;
        this.terra = 31557600;
    }

    onEarth() {

        let idade = this.seconds / this.terra;
        console.log(this.space);
        return parseFloat(idade.toFixed(2));

    }

    onMercury() {

        let mercury = this.terra * .2408467;
        let idade = this.seconds / mercury;
        return parseFloat(idade.toFixed(2));
    }

    onVenus() {
        let venus = this.terra * .61519726;
        let idade = this.seconds / venus;
        return parseFloat(idade.toFixed(2));
    }

    onMars() {
        let mars = this.terra * 1.8808158;
        let idade = this.seconds / mars;
        return parseFloat(idade.toFixed(2));
    }

    onJupiter() {
        let jupiter = this.terra * 11.862615;
        let idade = this.seconds / jupiter;
        return parseFloat(idade.toFixed(2));
    }

    onSaturn() {
        let saturn = this.terra * 29.447498;
        let idade = this.seconds / saturn;
        return parseFloat(idade.toFixed(2));
    }

    onUranus() {

        let uranus = this.terra * 84.016846;
        let idade = this.seconds / uranus;
        return parseFloat(idade.toFixed(2));
    }

    onNeptune() {
        let neptune = this.terra * 164.79132;
        let idade = this.seconds / neptune;
        return parseFloat(idade.toFixed(2));
    }
}
export default SpaceAge;