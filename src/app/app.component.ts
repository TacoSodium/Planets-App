import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PlanetService } from './services/planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  sortByDefault: String = "Name";
  toggleSortBy: boolean = false;
  toggleParameter: String = this.sortByDefault;

  default: String = "Sort by Distance"
  toggleSort: boolean = false;
  toggleText: String = this.default;

  ontoggleSort() {
    this.toggleSort = !this.toggleSort;
    this.toggleSortBy = !this.toggleSortBy;

    if (this.toggleSort == true) {
      this.toggleText = "Sort Alphabetically";
      this.toggleParameter = "DistanceFromSun";
    } else {
      this.toggleText = this.default;
      this.toggleParameter = this.sortByDefault
    }
  }
}
