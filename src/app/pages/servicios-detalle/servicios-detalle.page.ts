import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios-detalle',
  templateUrl: './servicios-detalle.page.html',
  styleUrls: ['./servicios-detalle.page.scss'],
})
export class ServiciosDetallePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serviciosService: ServiciosService,
    private menu: MenuController
  ) {}

  servicios: any = [];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.serviciosService.getServicioDetalle(id).subscribe((res) => {
      this.servicios = res;
    });
  }

  toggleMenu() {
    this.menu.toggle();
  }
}
