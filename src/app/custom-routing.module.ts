import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuildersComponent } from './builders/builders.component';
import { FormersComponent } from './formers/formers.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forRoot([
      {
        path: "dashboard",
        component:DashboardComponent
      },
      {
        path: "builders",
        component:BuildersComponent
      },
      {
        path: "cars",
        component:CarsComponent
      },
      {
        path: "formers",
        component:FormersComponent
      },
    ]),
  ],
  exports:[
    RouterModule
  ],
  declarations: [],
  providers: [
  ],
})
export class CustomRoutingModule { }
