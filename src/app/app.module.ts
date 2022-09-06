import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperComponent } from './upper/upper.component';
import { ContainerComponent } from './container/container.component';
import { ProductdisplayunitComponent } from './productdisplayunit/productdisplayunit.component';
import {FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccesComponent } from './succes/succes.component';
@NgModule({
  declarations: [
    AppComponent,
    UpperComponent,
    ContainerComponent,
    ProductdisplayunitComponent,
    SuccesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
