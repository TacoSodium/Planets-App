export class Planet {
    Name: String;
    Moons: Number;
    DistanceFromSun: number;

    constructor(name: String, moons: Number, distanceFromSun: number) {
        this.Name = name;
        this.Moons = moons;
        this.DistanceFromSun = distanceFromSun;
    }
}
