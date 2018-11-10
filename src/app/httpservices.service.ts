import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
url;
  constructor(private httpcall:HttpClient) {
    this.url="https://jsonplaceholder.typicode.com/posts";
   }
   getdata(){
     return this.httpcall.get(this.url);
   }
  
}

