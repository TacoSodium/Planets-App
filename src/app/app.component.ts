import { Component } from '@angular/core';
import { PlanetService } from './services/planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  default: String = "Sort by Distance"
  toggleSort: boolean = false;
  toggleText: String = this.default;

  ontoggleSort() {
    this.toggleSort = !this.toggleSort;

    if (this.toggleSort == true) {
      this.toggleText = "Sort Alphabetically";
    } else {
      this.toggleText = this.default;
    }
  }
}
