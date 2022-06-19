import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ServicioInterface {
  id: number;
  descripcion: string;
  habilitado: string;
  valor: number;
  tiempo: number;
  comentario: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  constructor(private http: HttpClient) {}

  getServicios(): Observable<ServicioInterface> {
    return this.http.get<ServicioInterface>(`${environment.baseUrl}servicios`);
  }

  getServicioDetalle(id: string) {
    return this.http.get(`${environment.baseUrl}servicios/${id}`);
  }
}
