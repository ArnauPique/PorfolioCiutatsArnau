import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) { }

  public getInfoPagina(){
    return this.http.get('assets/data/infopagina.json');
  }

  getInfoEquipo(){
    return this.http.get('https://porfolio-68f98-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
  }



}
