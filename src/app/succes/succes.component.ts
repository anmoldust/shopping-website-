import { Component, OnInit } from '@angular/core';
import {ApiformethodsService} from '../service/apiformethods.service'
@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.css']
})
export class SuccesComponent implements OnInit {
 message="";
 value=0;
  constructor(private api :ApiformethodsService ) {
    this.message=this.api.get();
    this.value=this.api.getN();
   }

  ngOnInit(): void {
  }

}
