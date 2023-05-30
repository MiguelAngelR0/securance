import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';







const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        loadChildren: () => import('src/app/pages/home-page/home-page.module').then(m => m.HomePageModule)//Cuando pones el loadChildren, hay que poner en su modulo, la propia ruta apuntando al componente
        
      },
      {
        path: 'buscador',
        loadChildren: () => import('./pages/buscador-page/buscador-page.module').then(m => m.BuscadorPageModule)
      },
      {
        path: 'detallePoliza/:id',
        loadChildren: () => import('./pages/detalle-poliza-page/detalle-poliza-page.module').then(m => m.DetallePolizaPageModule)
      }
    ]
  },

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
