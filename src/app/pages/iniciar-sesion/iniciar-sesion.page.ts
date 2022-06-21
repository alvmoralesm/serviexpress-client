import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {
  constructor(private menu: MenuController) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }
}
