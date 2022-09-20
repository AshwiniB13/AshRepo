import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MycartComponent } from './mycart/mycart.component';
import { EproductComponent } from './eproduct/eproduct.component';
import { EproductsComponent } from './eproducts/eproducts.component';
import { EcartComponent } from './ecart/ecart.component';
import { EditEproductComponent } from './edit-eproduct/edit-eproduct.component';
import { eProductService } from './services/eProductService';
import { eCartService } from './services/eCartService';
import { ShowchangeDirective } from './showchange.directive';
import { TextPipe } from './text.pipe';
import { PaymentComponent } from './payment/payment.component';
import { CardformatDirective } from './cardformat.directive';
import { RegisterComponent } from './register/register.component';
import { UserformchangesDirective } from './userformchanges.directive';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { LoginComponent } from './login/login.component';
import { UnderstandComponent } from './understand/understand.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserService } from './services/UserService.service';
import { PostComponent } from './post/post.component';
import { BlogPostService } from './services/Post.service';
import { ProductHttpService } from './services/producthttp.service';
import { WeatherComponent } from './weather/weather.component';
import { SearchPicsComponent } from './search-pics/search-pics.component';
import { SearchService } from './services/SearchImages';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EditProductComponent,
    MycartComponent,
    EproductComponent,
    EproductsComponent,
    EcartComponent,
    EditEproductComponent,
    ShowchangeDirective,
    TextPipe,
    PaymentComponent,
    CardformatDirective,
    RegisterComponent,
    UserformchangesDirective,
    ListproductComponent,
    ProductdetailComponent,
    LoginComponent,
    UnderstandComponent,
    EmployeesComponent,
    EmployeeComponent,
    PostComponent,
    WeatherComponent,
    SearchPicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule /*reactive forms validation*/,
    HttpClientModule
  ],
  providers: [ProductService, eProductService, eCartService, UserService, BlogPostService, ProductHttpService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
