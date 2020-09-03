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

  toggleDefault: string = "Edit";
  toggleText: string = this.toggleDefault;
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

  get name() { return this.planetForm.get('name'); }

  deletePlanet(remove: Planet) {
    this.onDelete.emit(remove);
  }

  startEdit() {
    this.editing = true;
    this.toggleText = "Save";
  }

  stopEdit() {
    this.editing = false;
    this.toggleText = this.toggleDefault;
  }
}
