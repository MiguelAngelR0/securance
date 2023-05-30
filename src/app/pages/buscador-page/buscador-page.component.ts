import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador-page',
  templateUrl: './buscador-page.component.html',
  styleUrls: ['./buscador-page.component.scss']
})
export class BuscadorPageComponent implements OnInit{
  
  array!: any[]; //creo una variable para recibir el array y mandarlo al componente hijo "listado-buscador-polizas"

  
  ngOnInit(): void {
   
  }

  
  recibirArray(array: any[]): void { //lo envio con este metodo
    this.array = array;
  }
  

}
