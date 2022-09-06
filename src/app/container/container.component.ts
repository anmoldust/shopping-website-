import { Component, OnInit } from '@angular/core';
import {ItemimporterService} from '../service/itemimporter.service'
import {MethodimporterService} from '../service/methodimporter.service'
import {ApiformethodsService} from '../service/apiformethods.service'
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  users:any;
  value=1;
  p=1;
  constructor(private api:ItemimporterService,private cartapi:MethodimporterService ,private ppp:ApiformethodsService) {
    this.api.users().subscribe((data)=>
    {
     this.users=data;
     this.users.forEach((a:any)=>
     {
      Object.assign(a,{quantity:1 ,total:a.price});
     });
    })
   }
   addtocart(item:any)
   {
     alert("your "+item.title +"added") ;
     this.cartapi.add(item);
   }
  ngOnInit(): void {
  }
  loginu(item: any)
  {
this.value=(item.quantity)+1;
  }
}
