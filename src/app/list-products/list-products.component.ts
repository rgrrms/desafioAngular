import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../scripts/services/products.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Array<any>;
  countProducts: any;

  constructor(private productsService: ProductsService, private router: Router) { } 

  ngOnInit(): void {
    this.list();
    this.count();
  }

  list() {
    this.productsService.listProducts().subscribe(res => this.products = res);
  }

  count() {
    const token = localStorage.getItem('jwt');
    this.productsService.countProducts('Bearer '+token).subscribe(c => this.countProducts = c);
  }

  async delete(id: any) {
    const token = localStorage.getItem('jwt');
    if(token) {
      const result = await this.productsService.deleteProducts(id, 'Bearer '+token).subscribe(res => {
        this.products = this.products.filter(product => id != product.id);        
      });
      this.count();
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  async details(id: any) {
    this.router.navigate(['/details'], {queryParams: {id: id}});
  }
}
