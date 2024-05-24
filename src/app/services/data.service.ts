import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  miBehaviorSubject = new BehaviorSubject<string>('Hello Yayo')

  constructor() { }

  setData(data:any) {
    this.miBehaviorSubject.next(data);
  }

  getData() {
    return this.miBehaviorSubject.asObservable();
  }
}
