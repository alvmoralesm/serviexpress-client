import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {
  constructor(private menu: MenuController) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }
}
