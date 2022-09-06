import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiformethodsService {
 message="hello";
 valuer=0;
 q=0;
  constructor() { }
  set(item :string)
  {
    this.message=item;
  }
  get()
  {
    return this.message;
  }
  setN(item :number)
  {
    this.valuer=item;
  }
  getN()
  {
    return this.valuer;
  }
  setQ(item :number)
  {
    this.q=item;
  }
  getQ()
  {
return this.q;
  }

}
