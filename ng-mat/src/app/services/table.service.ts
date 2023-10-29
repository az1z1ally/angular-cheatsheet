import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface DataRepresentation {
  id?: number,
  userId?: number,
  title?: string,
  body?: string
}

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/'

  constructor(private service: HttpClient) { 
    
  }

  getData() {
    let url = `${this.baseUrl}/posts`;
    return this.service.get<DataRepresentation[]>(url)
  }
}
