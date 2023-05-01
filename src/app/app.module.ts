import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './companents/product/product.component';
import { CategoryComponent } from './companents/category/category.component';
import { NaviComponent } from './companents/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipe } from './pipes/filter-pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummeryComponent } from './companents/cart-summery/cart-summery.component';
import { ProductAddComponent } from './companents/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipe,
    CartSummeryComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      closeButton:true,
      progressBar:true,
      progressAnimation:'increasing'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
