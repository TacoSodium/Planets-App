import { Injectable } from '@angular/core';

import { Planet } from "../models/planet";

@Injectable({
  providedIn: 'root'
})

export class PlanetService {
  planets: Planet[] = [
    new Planet("Mercury", 0, 57),
  ]
};

addPlanet(newPlanet: Planet) {
  this.planets.push(newPlanet);
}

sortByDistance() {
  this.planets
}