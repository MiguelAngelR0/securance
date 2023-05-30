import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BuscadorPageComponent } from './buscador-page.component';

import { HeaderModule } from 'src/app/components/header/header.module';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BuscadorPolizasModule } from 'src/app/components/buscador-polizas/buscador-polizas.module';
import { ListadoBuscadorPolizasModule } from 'src/app/components/listado-buscador-polizas/listado-buscador-polizas.module';


const routes: Routes = [
  {
    path: '',
    component: BuscadorPageComponent
  }

];

@NgModule({
  declarations: [BuscadorPageComponent],
  imports: [
    CommonModule,HeaderModule,RouterModule.forChild(routes),FooterModule,BuscadorPolizasModule,ListadoBuscadorPolizasModule
  ],providers: [
    DatePipe
  ]
})
export class BuscadorPageModule { }
