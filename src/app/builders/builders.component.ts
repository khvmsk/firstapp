import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-builders',
  templateUrl: './builders.component.html',
  styleUrls: ['./builders.component.css']
})
export class BuildersComponent implements OnInit {
  fc = new FormControl();
  userdetails: FormGroup;
  constructor(private titleService: Title, private fb: FormBuilder) { }

  ngOnInit() {
    this.setTitle("Builders");
    this.createForm();
  }
  setTitle(newtitle: string) {
    this.titleService.setTitle(newtitle);
  }
  createForm() {
    this.userdetails = this.fb.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      city: [null, Validators.required],
      email: [null, Validators.required],
      address: [null, Validators.required],
    })
  }

  Submit() {
    console.log(this.userdetails.value);
  }
}
