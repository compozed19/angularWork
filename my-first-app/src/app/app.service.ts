import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 //end point url
//  const obs =  new observable();
  
 userData =[{
   id :1,
   name:'ABC',
   college : 'lpu'
 },{
   id :2,
   name :'pqr',
   college :'lpu'
 }]
 url :string ='http://localhost:3000/api';

  constructor(private http : HttpClient) { } //instantiata our http class

  userDetails(data){
    console.log("inside service---", data);
    return this.http.post(this.url,{data}).subscribe(data => {
      console.log("post request is----",data);
    }, error => {
      console.log("error",error);
    })
  }

  public getStudents():any{
    const studentObservable = new Observable(observer =>{
      setTimeout(() =>{
        observer.next(this.userData);
      },1000);
    });
    console.log("observer is----",studentObservable);
    return studentObservable;
  }
}
