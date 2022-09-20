import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { EcartComponent } from './ecart/ecart.component';
import { EditEproductComponent } from './edit-eproduct/edit-eproduct.component';
import { EmployeesComponent } from './employees/employees.component';
import { EproductsComponent } from './eproducts/eproducts.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { RegisterComponent } from './register/register.component';
import { SearchPicsComponent } from './search-pics/search-pics.component';
import { UnderstandComponent } from './understand/understand.component';

const routes: Routes = [
  { path: 'products', component: EproductsComponent },
  { path: 'edit', component: EditEproductComponent },
  { path: 'cart', component: EcartComponent, canActivate: [AuthenticationGuard]},
  //{ path: 'list', component: ListproductComponent }, //normal routing
  {
    path: 'list', component: ListproductComponent, children: [
      { path: 'details/:pid', component: ProductdetailComponent }
    ]
  },
  { path: 'details/:pid', component: ProductdetailComponent },
  { path: '', component: UnderstandComponent },
  { path: 'emp', component: EmployeesComponent },

  {
    path: 'login', component: LoginComponent
    //, children: [
    //  { path: 'products', component: EproductsComponent }
    //]
},

  { path: 'register', component: RegisterComponent },
  { path: 'post', component: PostComponent },
  { path: 'search', component: SearchPicsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


