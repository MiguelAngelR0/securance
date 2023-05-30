import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoProxRenComponent } from './listado-prox-ren.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [ListadoProxRenComponent],
  imports: [
    CommonModule,MatTableModule
  ],exports:[ListadoProxRenComponent]
})
export class ListadoProxRenModule { }
