import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService, Product, Comment } from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comment[];

  newRating:number = 5;
  newComment: string = "";

  isCommentHidden: boolean = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) {

   }

  ngOnInit() {
    let productId = this.routeInfo.snapshot.params["productId"]
    this.product = this.productService.getProductById(productId);
    this.comments = this.productService.getCommentForProduct(productId);
  }

  addComment(){
    let comment = new Comment(0, this.product.id, new Date().toISOString(), "someOne", this.newRating, this.newComment);
    this.comments.unshift(comment);
    
    this.newComment = "";
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
