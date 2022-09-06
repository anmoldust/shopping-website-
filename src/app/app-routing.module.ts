import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

import { ProductdisplayunitComponent } from './productdisplayunit/productdisplayunit.component';
import { SuccesComponent } from './succes/succes.component';
const routes: Routes = [
  {path : '', redirectTo : 'container' , pathMatch : 'full'},
  {path : 'productdisplayunit' , component : ProductdisplayunitComponent},
  {path : 'container' , component : ContainerComponent},
  {path : 'success' , component : SuccesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
