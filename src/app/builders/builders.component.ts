import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-builders',
  templateUrl: './builders.component.html',
  styleUrls: ['./builders.component.css']
})
export class BuildersComponent implements OnInit {

  constructor(private titleService:Title) { }

  ngOnInit() {
    this.setTitle("Builders");
  }
  setTitle(newtitle:string){
    this.titleService.setTitle(newtitle);
  }
}
