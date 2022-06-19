import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {
  servicios = [];
  constructor(
    private serviciosService: ServiciosService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.listarServicios();
  }

  async listarServicios() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'bubbles',
    });
    await loading.present();
    this.serviciosService.getServicios().subscribe((res) => {
      loading.dismiss();
      this.servicios = [...this.servicios];
      console.log(res);
    });
  }
}
