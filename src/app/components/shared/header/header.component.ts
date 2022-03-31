import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
buscartexto(texto: string){

    if (texto.length >=3) {
      this.route.navigate(['buscar', texto]);
      
    } else {
      alert('cantidad minima de caracteres es 3')
    }
    
}

  resetBusqueda(){
    this.route.navigate(['porfolio']);
  }

}
