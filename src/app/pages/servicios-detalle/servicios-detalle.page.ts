import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios-detalle',
  templateUrl: './servicios-detalle.page.html',
  styleUrls: ['./servicios-detalle.page.scss'],
})
export class ServiciosDetallePage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serviciosService: ServiciosService
  ) {}

  servicios: any = [];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.serviciosService.getServicioDetalle(id).subscribe((res) => {
      this.servicios = res;
    });
  }
}
