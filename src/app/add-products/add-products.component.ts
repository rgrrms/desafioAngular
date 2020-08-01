import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { ProductsService } from '../scripts/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  product: any = {};
  token = `Bearer ${localStorage.getItem('jwt')}`; 

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.product = {
      name: '',
      description: '',
      enabled: 1
    };
  }

  async add(form: FormGroup){
    if(form.valid){
      try {
        const response = await this.productService.addProducts(this.product, this.token).toPromise();
        this.router.navigate(['/products'])
      } catch(error) {
        console.log(error)
      }      
    } else {
      return alert("Login invalido!")
    }
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}
