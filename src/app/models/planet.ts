export class Planet {
    Name: String;
    Moons: Number;
    DistanceFromSun: String;

    constructor(name: String, moons: Number, distanceFromSun: String) {
        this.Name = name;
        this.Moons = moons;
        this.DistanceFromSun = distanceFromSun;
    }
}
