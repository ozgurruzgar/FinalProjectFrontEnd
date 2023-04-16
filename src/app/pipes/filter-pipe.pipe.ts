import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value
    .filter((p:Product)=>p.productName
    .toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}

//javascript array fonkiyonları map,filter
//value.filter() diziye filtre uygulandığında 
//ilgili şarta uyan yeni bir array çıkarıyor.