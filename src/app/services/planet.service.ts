import { Injectable } from '@angular/core';

import { Planet } from "../models/planet";

@Injectable({
  providedIn: 'root'
})

export class PlanetService {

  planets: Planet[] = [
    new Planet("Venus", 0, 67),
    new Planet("Mercury", 0, 57),
    new Planet("Neptune", 14, 4503),
    new Planet("Jupiter", 79, 779)
  ];

  addPlanet(newPlanet: Planet) {
    this.planets.push(newPlanet);
  }

  sortBy(prop: string) {
    return this.planets.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0);
  }
};