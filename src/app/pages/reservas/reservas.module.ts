import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservasPageRoutingModule } from './reservas-routing.module';

import { ReservasPage } from './reservas.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from '../cal-modal/cal-modal.module';
import localeEs from '@angular/common/locales/es-CL';

registerLocaleData(localeEs);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule,
  ],
  declarations: [ReservasPage],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
})
export class ReservasPageModule {}
