import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Planet } from "../models/planet";

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  @Input()
  planet: Planet;

  @Output()
  onDelete = new EventEmitter<Planet>();

  constructor() { }

  ngOnInit(): void {
  }

  deletePlanet(remove: Planet) {
    this.onDelete.emit(remove);
  }

}
