import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../httpservices.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  datacollection;
  constructor(private httpservicesService:HttpservicesService, private titleService: Title) {
   }

  ngOnInit() {
    this.httpservicesService.getdata().subscribe(reciviedData =>{
      console.log(this.datacollection=reciviedData);
    });
    this.setTitle("Dashboard");
  }
  public setTitle(newTitle: string) {
    console.log(this.titleService.setTitle(newTitle));
  }
  
}
