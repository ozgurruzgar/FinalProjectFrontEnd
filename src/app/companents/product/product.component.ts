import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
//import {HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products:Product[] = [];
  dataLoaded=false;
  filterText="";
 constructor(private productService:ProductService,
   private activatedRoute:ActivatedRoute){}

//  Angular'ın içinde olan bir servis MevcutRoute

 ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    if(params["categoryId"]){
      this.getproductsByCategory(params["categoryId"]);
    }else{
      this.getproducts();
    }
  })
 }

 getproducts(){
  this.productService.getproducts().subscribe(response=>{
    this.products = response.data;
    this.dataLoaded=true;
  });
 }

 getproductsByCategory(categoryId:number){
  this.productService.getproductsByCategory(categoryId).subscribe(response=>{
    this.products = response.data;
    this.dataLoaded=true;
  });
 }
}
