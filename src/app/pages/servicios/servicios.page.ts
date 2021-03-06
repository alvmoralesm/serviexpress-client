import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  constructor(
    private serviciosService: ServiciosService,
    private loadingCtrl: LoadingController,
    private menu: MenuController
  ) {}

  servicios: any = [];

  ngOnInit() {
    this.listarServicios();
  }

  toggleMenu() {
    this.menu.toggle();
  }

  async listarServicios() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.serviciosService.getServicios().subscribe((res) => {
      loading.dismiss();
      this.servicios = res;
      console.log(this.servicios);
    });
  }
}
