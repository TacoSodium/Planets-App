import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../services/planet.service';
import { Planet } from '../models/planet';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  constructor(public planetService: PlanetService) { }

  createPlanet(name: String, moons: String, distance: String) {
    var intMoons = +moons;
    var boolMoons = isNaN(intMoons);

    if (name === "" || moons === "" || distance === "") {
      alert("Fields cannot be empty");
    } else if (boolMoons == true) {
      alert("Please enter a vaild number of moons");
    } else {
      this.planetService.addPlanet(new Planet(name, intMoons, distance));
    }
  }

  ngOnInit(): void {
  }

}
