import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ItemimporterService {

  constructor(private itemimporter:HttpClient) { 
    
  }
  users()
  {
    return this.itemimporter.get('assets/importantdata.json');
  }
}
