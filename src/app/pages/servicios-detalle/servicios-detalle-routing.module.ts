import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosDetallePage } from './servicios-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosDetallePageRoutingModule {}
