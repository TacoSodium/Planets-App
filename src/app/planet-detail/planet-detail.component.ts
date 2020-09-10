import { Component, OnInit, Input, Output, EventEmitter, ViewRef, ViewChild } from '@angular/core';
import { Planet } from "../models/planet";
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

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

  @ViewChild("planetForm")
  planetForm: NgForm;

  constructor() { }

  ngOnInit(): void {
    
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
    console.log(this.planetForm);
    if (this.planetForm.valid) {
      this.editing = false;
    }
  }
}
