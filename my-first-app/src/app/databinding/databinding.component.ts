import { Component, OnInit } from '@angular/core';

import {NgForm,FormGroup,FormBuilder,FormArray} from '@angular/forms';

@Component({
  selector: 'app-databinding',
  // template :`<h1 [innerHTML]> {{fullName}} </h1>
  //  <input  [(ngModel)] = "name"  #ctrl="ngModel" />
  //  <p>{{name}}</p>
  //  `,
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  name :string =  '';
  data1 :string =''
  fullName : string = "RP app";
  serverId : number =10;
  serverStatus : string ="success";

  orderForm : FormGroup;
  items : FormArray;

  constructor(private formBuilder : FormBuilder) {}

   createItem() : FormGroup{
     return this.formBuilder.group({
       name : '',
       desc : '',
       price : ''
     });
   }

   addItems() : void{
     this.items = this.orderForm.get('items') as FormArray;
     this.items.push(this.createItem());
   }
  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customerName : '',
      email:'',
      items : this.formBuilder.array([this.createItem()])
    })
  }

  onSubmit (f: NgForm){
    console.log(f.value);
    console.log(f.valid);  
  }
}
