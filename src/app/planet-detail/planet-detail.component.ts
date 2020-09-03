import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Planet } from "../models/planet";
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  editing: boolean = false;

  planetForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.planetForm = new FormGroup({
      name: new FormControl(this.planet.Name, Validators.required,),
      moons: new FormControl(this.planet.Moons, [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]),
      distance: new FormControl(this.planet.DistanceFromSun, [
        Validators.required,
        Validators.pattern('[0-9]*')
      ])
    });
  }

  //deletes planet from planet list
  deletePlanet(remove: Planet) {
    this.onDelete.emit(remove);
  }

  //begins editing
  startEdit() {
    this.editing = true;
  }

  //completes editing of inputs
  stopEdit(event: Event) {
    event.preventDefault();
    this.editing = false;
  }
}
