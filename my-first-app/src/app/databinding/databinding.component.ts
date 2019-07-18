import { Component, OnInit } from '@angular/core';

import {NgForm,FormGroup,FormBuilder} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit (f: NgForm){

    console.log(f.value);
    console.log(f.valid);  

  }

}
