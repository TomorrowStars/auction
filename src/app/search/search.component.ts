import { ProductService } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  categories: string[];


  constructor(private productService: ProductService, private router: Router) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', [Validators.minLength(3), Validators.required]],
      price: [null, this.positiveNumberValidator],
      category: ["-1"]
    });
   }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  positiveNumberValidator(control: FormControl){
    if(!control.value){
      return null;
    }
    let price = parseInt(control.value);
    if (price > 0) {
      return null;
    } else {
      return {positiveNumber: true};
    }
  }

  onSearch(){
    if (this.formModel.valid) {
      console.log(this.formModel.value);
      this.router.navigate(['/']);
    }
  }

}
