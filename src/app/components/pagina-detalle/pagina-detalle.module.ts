import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaDetalleComponent } from './pagina-detalle.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PaginaDetalleComponent],
  imports: [
    CommonModule,MatCardModule,MatTableModule,MatButtonModule,MatCheckboxModule,ReactiveFormsModule
  ],exports:[PaginaDetalleComponent]
})
export class PaginaDetalleModule { }
