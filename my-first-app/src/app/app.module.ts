import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HightlightDirective } from './hightlight.directive';
import {AppService} from './app.service';
//feature module
import {CustomerDashboardModule} from './customer-dashboard/customer-dashboard/customer-dashboard.module';
import { ReverseStrPipe } from './reverse-str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DatabindingComponent,
    HightlightDirective,
    ReverseStrPipe,
  ],
  imports: [
    BrowserModule,  // configure app for browser which needs to done only once
    AppRoutingModule,
    ReactiveFormsModule,
    CustomerDashboardModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
