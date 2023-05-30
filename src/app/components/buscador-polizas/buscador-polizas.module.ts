import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorPolizasComponent } from './buscador-polizas.component';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BuscadorPolizasComponent],
  imports: [
    CommonModule,MatTableModule,MatDatepickerModule,MatInputModule,MatNativeDateModule,MatButtonModule,MatChipsModule,MatIconModule,ReactiveFormsModule
  ],exports:[BuscadorPolizasComponent]
})
export class BuscadorPolizasModule { }
