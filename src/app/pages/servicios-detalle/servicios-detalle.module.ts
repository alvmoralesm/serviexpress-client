import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosDetallePageRoutingModule } from './servicios-detalle-routing.module';

import { ServiciosDetallePage } from './servicios-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosDetallePageRoutingModule,
  ],
  declarations: [ServiciosDetallePage],
})
export class ServiciosDetallePageModule {}
