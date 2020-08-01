import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductsService } from './scripts/services/products.service';
import { AuthService } from './scripts/services/auth.service';
import { ListProductsComponent } from './list-products/list-products.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProductsComponent } from './add-products/add-products.component';
import { RunApplicationComponent } from './run-application/run-application.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    LoginComponent,
    AddProductsComponent,
    RunApplicationComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
