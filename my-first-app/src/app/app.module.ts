import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HightlightDirective } from './hightlight.directive';
//feature module

import {CustomerDashboardModule} from './customer-dashboard/customer-dashboard/customer-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DatabindingComponent,
    HightlightDirective,
  ],
  imports: [
    BrowserModule,  // configure app for browser which needs to done only once
    AppRoutingModule,
    ReactiveFormsModule,
    CustomerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
