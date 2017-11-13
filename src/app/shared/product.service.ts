import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products:Product[] = [
      new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，是我在学习慕课网Angular入门实战时创建的",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",1.99,2.5,"这是第二个商品，是我在学习慕课网Angular入门实战时创建的",["电子产品","硬件设备"]),
      new Product(3,"第三个商品",1.99,4.5,"这是第三个商品，是我在学习慕课网Angular入门实战时创建的",["图书"]),
      new Product(4,"第四个商品",1.99,1.5,"这是第四个商品，是我在学习慕课网Angular入门实战时创建的",["电子产品","软件设备"]),
      new Product(5,"第五个商品",1.99,0.5,"这是第五个商品，是我在学习慕课网Angular入门实战时创建的",["电子产品","硬件设备"]),
      new Product(6,"第六个商品",1.99,3.5,"这是第六个商品，是我在学习慕课网Angular入门实战时创建的",["图书"])
    ];
  
  comments: Comment[] = [
    new Comment(1, 1, "2017-11-13 17:06", "张三", 5, "东西不错。"),
    new Comment(2, 1, "2017-11-13 16:06", "李四", 4, "东西不错。"),
    new Comment(3, 1, "2017-11-13 15:06", "王强", 5, "东西不错。"),
    new Comment(4, 1, "2017-11-13 18:06", "赵雪", 4, "东西不错。"),
    new Comment(2, 2, "2017-11-13 17:06", "秦东", 3, "东西不错。"),
    new Comment(3, 3, "2017-11-13 17:06", "陈升", 4, "东西不错。")
  ]
  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }

  getProductById(id:number): Product{
    return this.products.find((product) => product.id == id);
  }

  getCommentForProduct(id: number): Comment[]{
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ) {

  }
}

export class Comment {
  constructor(public id: number,
              public productId: number,
              public timeStamp: string,
              public user: string,
              public rating: number,
              public content: string){

  }
}