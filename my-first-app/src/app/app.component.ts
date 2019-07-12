import { Component } from '@angular/core';
import {FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-first-app';
  formGroup: FormGroup;

  constructor(private fb :FormBuilder ){
    this.createForm();
  }
 
 
  createForm(){
    this.formGroup = this.fb.group({
      firstName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      phoneNo : new FormControl('',Validators.required),
    });

  }
  // ngOnInit() {
  //   this.formGroup = this.fb.group({
  //     firstName : new FormControl('',Validators.required),
  //     lastName : new FormControl('',Validators.required),
  //     email : new FormControl('',Validators.required),
  //     phoneNo : new FormControl('',Validators.required),
  //   });
  // }

  get f() { return this.formGroup.controls; }
  onSubmitClick(){
    console.log("inside onSubmit function",this.formGroup.value);
  }
}
