import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatIconModule} from '@angular/material/icon';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,MatIconModule, RouterModule,
  ], exports: [HeaderComponent,MatIconModule]
})
export class HeaderModule { }
