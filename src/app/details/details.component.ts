import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../scripts/services/products.service';
import { FormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: any;
  id: any;

  constructor(private productsService: ProductsService, private router: ActivatedRoute, private r: Router) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      if(params['id']){
        this.id = params.id;
        const token = localStorage.getItem('jwt');
        this.productsService.detailsProducts(params.id,  'Bearer '+token).subscribe(res => this.details = res);
        console.log(params);
      }
    })
  }

  async update(form: FormGroup){
    if(form.valid){
      const token = localStorage.getItem('jwt');
      try {
        const response = await this.productsService.updateProducts(this.id, this.details, 'Bearer '+token).toPromise();
        this.r.navigate(['/products']);
      } catch(error) {
        console.log(error)
      }      
    } else {
      return alert("Login invalido!")
    }
  }

  logout() {
    localStorage.removeItem('jwt');
    this.r.navigate(['/login']);
  }
}
