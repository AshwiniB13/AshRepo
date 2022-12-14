import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerService } from './services/customer.service';
import { TextPipe } from './text.pipe';
import { ShowchangeDirective } from './showchange.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    CustomerComponent,
    CustomersComponent,
    AddCustomerComponent,
    TextPipe,
    ShowchangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
