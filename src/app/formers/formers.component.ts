import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-formers',
  templateUrl: './formers.component.html',
  styleUrls: ['./formers.component.css']
})
export class FormersComponent implements OnInit {

  constructor(private titleService: Title ) { }

  ngOnInit() {
    this.setTitle("Formers");
  }
  setTitle(newTitle:string){
    this.titleService.setTitle(newTitle);
  }

}
