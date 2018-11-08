import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../httpservices.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  datacollection;
  constructor(private httpservicesService:HttpservicesService,  private titleService: Title) { }
 
  ngOnInit() {
    this.httpservicesService.getdata().subscribe(reciviedData =>{
      this.datacollection=reciviedData;
    })
    this.setTitle("Cars");
  }
  public setTitle(newTitle: string) {
    console.log(this.titleService.setTitle(newTitle));
  }

}
