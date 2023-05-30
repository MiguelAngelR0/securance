import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoBuscadorPolizasComponent } from './listado-buscador-polizas.component';
import { MatTableModule } from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import { BuscadorPolizasModule } from '../buscador-polizas/buscador-polizas.module';



@NgModule({
  declarations: [ListadoBuscadorPolizasComponent],
  imports: [
    CommonModule,MatTableModule,MatPaginatorModule,BuscadorPolizasModule
  ],exports:[ListadoBuscadorPolizasComponent]
})
export class ListadoBuscadorPolizasModule { }
