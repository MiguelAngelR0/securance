import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePolizaPageComponent } from './detalle-poliza-page.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { PaginaDetalleModule } from 'src/app/components/pagina-detalle/pagina-detalle.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DetallePolizaPageComponent
  }

];


@NgModule({
  declarations: [DetallePolizaPageComponent],
  imports: [
    CommonModule,HeaderModule,FooterModule,PaginaDetalleModule,RouterModule.forChild(routes)
  ],exports:[DetallePolizaPageComponent]
})
export class DetallePolizaPageModule { }
