import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import * as databindingComponent from'./databinding/databinding.component';



const routes: Routes = [
{
  path : 'product',
  component : ProductComponent
},
{
  path : 'dataBinding',
  component : databindingComponent.DatabindingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
