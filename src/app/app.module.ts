import { BrowserModule, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { BuildersComponent } from './builders/builders.component';
import { FormersComponent } from './formers/formers.component';
import { CarsComponent } from './cars/cars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomRoutingModule } from './custom-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpservicesService } from './httpservices.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';

 
@NgModule({
  declarations: [
    AppComponent,
    BuildersComponent,
    FormersComponent,
    CarsComponent,
    DashboardComponent,
    AgGridComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    CommonModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    CustomRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    AgGridModule.withComponents([]),
  ],
 
  providers: [
    HttpservicesService,
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
