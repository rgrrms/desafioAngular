import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://bravosul-app.herokuapp.com';

  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post(`${this.url}/auth/local`, JSON.stringify(user), this.loadHeaders());
  }

  listProducts() {
    return this.http.get<any>(`${this.url}/products`);
  }

  addProducts(products: any, token: string = '') {
    return this.http.post(`${this.url}/products`, JSON.stringify(products), this.loadHeaders(token));
  }

  deleteProducts(id: any, token: string = '') {
    return this.http.delete(`${this.url}/products/${id}`, this.loadHeaders(token));
  }

  detailsProducts(id: any, token: string = ''){
    return this.http.get<any>(`${this.url}/products/${id}`, this.loadHeaders(token));
  }

  updateProducts(id: any, details: any, token: string = ''){
    return this.http.put(`${this.url}/products/${id}`, JSON.stringify(details), this.loadHeaders(token));
  }

  countProducts(token: any){
    return this.http.get<any>(`${this.url}/products/count`, this.loadHeaders(token));
  }

  loadHeaders(token: string = '') {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `${token}`
    });

    return { headers };
  }
}
