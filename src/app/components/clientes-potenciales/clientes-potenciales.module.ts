import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesPotencialesComponent } from './clientes-potenciales.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ClientesPotencialesComponent,],
  imports: [
    CommonModule,MatCardModule,MatIconModule,MatButtonModule
  ],exports:[ClientesPotencialesComponent]
})
export class ClientesPotencialesModule { }
