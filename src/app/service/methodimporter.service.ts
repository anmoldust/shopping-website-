import {BehaviorSubject} from 'rxjs'
import { Injectable } from '@angular/core';
import {ItemimporterService} from './itemimporter.service';
@Injectable({
  providedIn: 'root'
})
export class MethodimporterService {
  store:any=[];
  display=new BehaviorSubject<any>([]);
  constructor(private api:ItemimporterService) { }
  Product()
  {
    return this.display.asObservable()
  }
  set(product :any)
  {
     this.store.push(...product);
    this.display.next(product);
  }
  add(product:any)
  {
    this.store.push(product);
    this.display.next(this.store);
    this.totalamount();
  }
  totalamount() : number{
    let t = 0;
    this.store.map((a:any)=>{
      t += a.total;
    })
    return t;
  }
  removeData(product:any)
  {
    this.store.map((a:any,index:any)=>
    {
      if(product.id==a.id)
      {
        this.store.splice(index,1);
      }
    });
  }
}
