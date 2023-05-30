import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from 'src/app/components/header/header.module';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BannerModule } from 'src/app/components/banner/banner.module';
import { ListadoProxRenModule } from 'src/app/components/listado-prox-ren/listado-prox-ren.module';
import { ClientesPotencialesModule } from 'src/app/components/clientes-potenciales/clientes-potenciales.module';
import { FooterModule } from 'src/app/components/footer/footer.module';


const routes: Routes = [
  {
    path: '',
    component:HomePageComponent
  }

];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,HeaderModule,BannerModule,ListadoProxRenModule,FooterModule,ClientesPotencialesModule,RouterModule.forChild(routes) //forChild(routes) para rutas hijas
  ],exports:[RouterModule]
})
export class HomePageModule { }
