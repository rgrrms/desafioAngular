import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { ProductsService } from '../scripts/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.user = {
      identifier: '',
      password: ''
    };
  }

  async auth(form: FormGroup){
    if(form.valid){
      try {
        const response = await this.productService.login(this.user).toPromise();
        if(response['jwt']){
          const token = response['jwt'];
          localStorage.setItem('jwt', token)
          this.router.navigate(['/run-application'])
          return;
        }
      } catch(error) {
        console.log(error)
      }      
    } else {
      return alert("Login invalido!")
    }
  }

}
