import { Injectable } from '@angular/core';
import { Color } from '../types/colorModel';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  getColorList(): Observable<Color[]>{
    const colors: Color[] = [
      {code: 'c1', name: 'Red'},
      {code: 'c2', name: 'Green'},
      {code: 'c3', name: 'Yellow'},
      {code: 'c4', name: 'Black'},
      {code: 'c0', name: 'white'},
    ];

    return of(colors).pipe(delay(2000))
  }
}
