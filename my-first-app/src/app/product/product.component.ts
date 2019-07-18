import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl,FormBuilder , Validators, FormArray} from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = "Product Component"
  formGroup : FormGroup
  array =[{
    name : 'RP'}]
   productDetails = [{}]

   arrayItems:{
     name: string,
     desc : string,
     price:number
   }[];
   demoArray =[]
  constructor(private formBuilder : FormBuilder) {
    this.formGroup = this.formBuilder.group({
      demoArray : this.formBuilder.array([])
    });
    console.log("demo array is------",this.arrayItems);
      this.createForm();
   }

  createForm(){
    this.formGroup = this.formBuilder.group({
      productName : new FormControl(''),
      productDesc: new FormControl(''),
      productPrice: new FormControl('')
    })
  }

  addPorduct(){
    this.productDetails = [{
      'productName' : this.formGroup.value.productName,
      'productDesc' : this.formGroup.value.productDesc,
      'productPrice' : this.formGroup.value.productPrice
    }]

    console.log("product Details are---",this.productDetails);
  }

    resetProduct(){
      this.formGroup.value.productName ='';
      this.formGroup.value.productDesc = '';
      this.formGroup.value.productPrice ='';
      this.productDetails = [{}];
    }
  ngOnInit() {
    this.arrayItems = []
  }

  getdemoArray(){
    return this.formGroup.get('demoArray') as FormArray
  }
  addItem(item){
    this.arrayItems.push(item);
    this.demoArray.push(this.formBuilder.control(false));
  }

  onSubmit(f :NgForm){
    console.log("value is-----",f.value);
    console.log(f.valid);
  }

}
