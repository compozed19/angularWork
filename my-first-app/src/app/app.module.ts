import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { HightlightDirective } from './hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DatabindingComponent,
    HightlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
