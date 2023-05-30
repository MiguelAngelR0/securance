import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pagina-detalle',
  templateUrl: './pagina-detalle.component.html',
  styleUrls: ['./pagina-detalle.component.scss']
})
export class PaginaDetalleComponent {
  edit:boolean = false;

  //todo hacer una clase para la poliza para asi luego mandarla al servicio

  toppings = this._formBuilder.group({
    lunas: false,
    pintura: false,
    accidente: false,
    asistencia: false
  });

  constructor(private _formBuilder: FormBuilder) {}

  editar(){
    console.log(this.edit)
    this.edit = !this.edit
  }



}
