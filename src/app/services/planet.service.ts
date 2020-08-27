import { Injectable } from '@angular/core';

import { Planet } from "../models/planet";

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  planets: Planet[] = [
    new Planet("Venus", 0, "67"),
    new Planet("Mercury", 0, "57"),
    new Planet("Neptune", 14, "4,503"),
    new Planet("Jupiter", 79 , "779")
  ];

  addPlanet(newPlanet: Planet) {
    this.planets.push(newPlanet);
  }

  sortByDistance() {
    this.planets.sort(this.compareDistance);
  }

  compareDistance(planetA: Planet, planetB: Planet) {
    if (planetA.DistanceFromSun > planetB.DistanceFromSun) {
      return -1;
    }
    else if (planetA.DistanceFromSun < planetB.DistanceFromSun) {
      return 1;
    }
    return 0;
  }
};