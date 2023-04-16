import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpClientModule }  from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl ="https://localhost:44356/api/categories/getall";
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
   }
}
