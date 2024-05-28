import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumosService {
  private urlServices:string = "https://localhost:8443/api/";
  private urlServiceValidaUser = "Usuario/validaUsuario?usuario=";
  private urlServiceLogin = "Usuario/login";
  private urlServiceRegistro = "Usuario/registro";
  private urlServiceCatalogos = "Catalogo/catalogos?idCatalogo=";
  private urlServiceCita = "Citas/cita";
  private urlServiceInternado = "Internados/internado"

  constructor(
              private http: HttpClient
             ) { }
  validaUsuario(usuario:string) {
  return new Promise((resolve, reject) => {
    var apiURL = this.urlServices+this.urlServiceValidaUser+usuario;
    this.http.get(apiURL)
      .toPromise()
      .then(res => { 
        resolve(res);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}
loginUsuario(usuario:any) {
  return new Promise((resolve, reject) => {
    var apiURL = this.urlServices+this.urlServiceLogin;
    this.http.post(apiURL, usuario)
      .toPromise()
      .then(res => {
        resolve(res);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}
setUsuario(usuario:any) {
  return new Promise((resolve, reject) => {
    var apiURL = this.urlServices+this.urlServiceRegistro;
    this.http.post(apiURL, usuario)
      .toPromise()
      .then(res => {
        resolve(res);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

cita(cita:any) {
  return new Promise((resolve, reject) => {
    var apiURL = this.urlServices+this.urlServiceCita;
    this.http.post(apiURL, cita)
      .toPromise()
      .then(res => {
        resolve(res);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

internados(internado:any) {
  return new Promise((resolve, reject) => {
    var apiURL = this.urlServices+this.urlServiceInternado;
    this.http.post(apiURL, internado)
      .toPromise()
      .then(res => {
        resolve(res);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}

catalogo(idCat: number) {
  return new Promise((resolve, reject) => {
    var apiURL = this.urlServices+this.urlServiceCatalogos+idCat;
    this.http.get(apiURL)
      .toPromise()
      .then(res => {
        resolve(res);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}
}
