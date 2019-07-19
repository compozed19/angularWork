import { Component } from '@angular/core';
import {FormGroup, FormControl,FormBuilder , Validators} from '@angular/forms';
import { AppService} from './app.service';
import {Observable, from } from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Pipe({name : 'exponentialStrength'})
export class AppComponent implements PipeTransform {
  transform(value : number, exponent? :number):number{
    return Math.pow(value,isNaN(exponent)?1 :exponent);
  }
  color ='pink';
  studentData =[];
  userDetails =[{
  }]
  title = 'my-first-app';
  formGroup: FormGroup;
  birthday = new Date(1988, 3, 15); // April 15, 1988

  constructor(private fb :FormBuilder ,private sendData : AppService){
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

  get f() { return this.formGroup.controls; }
  onSubmitClick(){
    console.log("inside onSubmit function",this.formGroup.value);
    this.userDetails =[{
      'userFirstName' :this.formGroup.value.firstName,
      'userLastName' : this.formGroup.value.lastName,
      'email' : this.formGroup.value.email,
      'phone' : this.formGroup.value.phoneNo
    }];
    this.sendData.userDetails(this.userDetails).unsubscribe;
}

ngOnInit(){
  const data = this.sendData.getStudents();
  console.log("data in component----", data);
  data.subscribe((studentData) =>{
  this.studentData = studentData;
  })
}
}