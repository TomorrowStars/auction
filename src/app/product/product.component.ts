import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from "../shared/product.service";
import { FormControl } from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   products: Product[];
   
   keyWords: string;

   titleFilter: FormControl = new FormControl();

   imgUrl:string = 'http://placehold.it/320x150';

  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value => this.keyWords = value
      );
   }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
// export class Product {
//   constructor(
//     public id:number,
//     public title:string,
//     public price:number,
//     public rating:number,
//     public desc:string,
//     public categories:Array<string>
//   ) {

//   }
// }