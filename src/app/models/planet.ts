export class Planet {
    Name: String;
    Moons: Number;
    DistanceFromSun: Number;

    constructor(name: String, moons: Number, distanceFromSun: Number) {
        this.Name = name;
        this.Moons = moons;
        this.DistanceFromSun = distanceFromSun;
    }
}
