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

  createPlanet(name: String, moons: String, distance: string) {
    var intMoons = +moons;
    var boolMoons = isNaN(intMoons);
    var intDistance = +distance;
    var boolDistance = isNaN(intDistance);

    if (name === "" || moons === "" || distance === "") {
      alert("Fields cannot be empty");
    } else if (boolMoons == true) {
      alert("Please enter a vaild number of moons");
    } else if (boolDistance == true) {
      alert("Please enter a valid distance");
    } else {
      this.planetService.addPlanet(new Planet(name, intMoons, intDistance));
    }
  }

  ngOnInit(): void {
  }

}
