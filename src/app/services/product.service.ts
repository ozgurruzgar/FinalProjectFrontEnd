import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpClientModule }  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl ="https://localhost:44356/api/";
  constructor(private httpClient:HttpClient) { }

  getproducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall";
   return this.httpClient.get<ListResponseModel<Product>>(newPath);
   }
   getproductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
    }
}
