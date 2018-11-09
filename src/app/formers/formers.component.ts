import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formers',
  templateUrl: './formers.component.html',
  styleUrls: ['./formers.component.css']
})
export class FormersComponent implements OnInit {

  formgroupstructure = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    address: new FormGroup({
      street: new FormControl(""),
      city: new FormControl(""),
      area: new FormControl(""),
    }),
  });

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle("Formers");
    this.formGroup();
    // this.updateProfile();
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  formGroup() {
    console.log(this.formgroupstructure.value);
  }
  updateProfile() {
    this.formgroupstructure.patchValue({
      firstname: 'satish kumar',
      address: {
        city: 'rajahmundry'
      }
    });
    this.formgroupstructure.controls['lastname'].setValue("kotipalli");
  
  }

}
