//Angular 模块类描述应用的部件是如何组合在一起的。 每个应用都至少有一个 Angular 模块，也就
//是根模块，
// 用来引导并运行应用。 你可以为它取任何名字。常规名字是 AppModule。  也就是  app.module.ts
//文件
/*引入组件*/
import { BrowserModule } from '@angular/platform-browser';/*BrowserModule，浏览器解
析的模块*/
import { NgModule } from '@angular/core';/*angualrjs 核心模块*/;
import { FormsModule } from '@angular/forms';/*表单数据绑定 表单验证需要的模块*/
import { HttpModule } from '@angular/http';/*数据请求模块*/ 
import { AppComponent } from './app.component';/*根组件*/// 
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component'
/*@NgModule 装饰器将 AppModule 标记为 Angular 模块类（也叫 NgModule 类）。
@NgModule 接受一个元数据对象，告诉 Angular 如何编译和启动应用。*/

@NgModule({
  declarations: [/*引入当前项目运行的的组件*/
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent, 
    CarouselComponent, 
    ProductComponent, 
    StarsComponent
  ],
  imports: [/*引入当前模块运行依赖的其他模块*/
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],/*定义的服务  回头放在这个里面*/
  bootstrap: [AppComponent]/* 指定应用的主视图（称为根组件） 通过引导根 AppModule 来启动
应用  ，这里一般写的是根组件*/
})

/*根模块不需要导出任何东西，  因为其它组件不需要导入根模块。 但是一定要写*/
export class AppModule { }
