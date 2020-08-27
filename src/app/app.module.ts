import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetsCreateComponent } from './planets-create/planets-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetDetailComponent,
    PlanetsCreateComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
