import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsIdx(){
    return this.http.get('https://porfolio-68f98-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json');
    
  }

  getProduct(codProd: string){
    return this.http.get(`https://porfolio-68f98-default-rtdb.europe-west1.firebasedatabase.app/productos/${codProd}.json`);
  }

  
}
