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
  submitted: boolean;
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
      firstname: [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)])],
      lastname: [null, Validators.compose([Validators.required, Validators.maxLength(8)])],
      city: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      address: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
    })
  }
  get f() { return this.userdetails.controls }
  // get firstname() { return this.userdetails.get('firstname'); }
  Submit() {
    this.submitted = true;
    console.log(JSON.stringify(this.userdetails.value));
    if (this.userdetails.invalid) {
      return
    }
    else {
      alert("Data submit success");
    }
  }
}
