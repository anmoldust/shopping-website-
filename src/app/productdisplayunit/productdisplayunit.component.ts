import { Component, OnInit } from '@angular/core';
import {ApiformethodsService} from '../service/apiformethods.service';
import {MethodimporterService} from '../service/methodimporter.service'
@Component({
  selector: 'app-productdisplayunit',
  templateUrl: './productdisplayunit.component.html',
  styleUrls: ['./productdisplayunit.component.css']
})
export class ProductdisplayunitComponent implements OnInit {
  productitem:any=[];
  allproducts:any=0;
  message="";
  vart="";
  constructor(private Api:MethodimporterService,private api:ApiformethodsService) {

    this.loginu;
    this.api.setN(this.allproducts);

   }

  ngOnInit(): void {
    this.Api.Product().subscribe(res=>{
      this.productitem=res;
      this.loginu
      this.allproducts=this.Api.totalamount();
      this.api.setN(this.allproducts);
     });
  }
  removeProduct(item:any)
  {
    alert("you removed"+item.title+"From Your Cart" );
    alert("Are You Sure To Remove It");
    this.allproducts=this.allproducts-item.price;
    this.Api.removeData(item);
    this.api.setN(this.allproducts);
    
  }
  addtocart(item: any){
    this.Api.add(item);
    this.api.setN(this.allproducts);
  }
  loginu(item :any)
  {
    
     this.api.set(item.name);
    this.vart=this.api.get();
  }
}
