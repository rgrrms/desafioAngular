import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AuthService } from './scripts/services/auth.service';
import { RunApplicationComponent } from './run-application/run-application.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'products',
      component: ListProductsComponent
    },
    {
      path: 'add-products',
      canActivate: [AuthService],
      component: AddProductsComponent
    },
    {
      path: 'run-application',
      component: RunApplicationComponent
    },
    {
      path: 'details',
      canActivate: [AuthService],
      component: DetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
