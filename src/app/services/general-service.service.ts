import { Injectable } from '@angular/core';
import { ConsumosService } from './consumos.service';
import {DatePipe} from '@angular/common';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  listaRoles: any = [];
  listaAreas: any = [];
  listaStsAtendido: any = [];
  listaSexo: any = [];
  listaStatusUser: any = [];
  listaUsuarios: any = [];
  listaPacientes: any = [];
  listaDoctores: any = [];
  listaDoctoresArea: any = [];
  listaEnfermeros: any = [];
  listaInternados: any = [];
  listaAltas: any = [];
  listaCitas: any = [];
  listaReporteoInternados: any = [];
  arrAreas: any = ["General", "Odontología", "Traumatología","Nutrición", "Rayos X", "Pediatria", "Tocología", "Cardiología"];
  indexReportInt: number = 0;
  SESSION: any = {};
  

  locale: any = {
    firstDayOfWeek:1,
    dayNames: ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"],
    dayNameShort: ["dom","lun","mar","mie","jue","vie","sab"],
    monthNames: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
    monthNamesShort: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],
    today: "Hoy",
    clear: "borrar"
  };

  constructor(
              public consumo: ConsumosService
              ) { 
                  this.getCatalogs();
                }     

  async getCatalogs(){
    this.setListaSexo();
    this.setListaStatusUser();
    await this.getListUsuarios();
    await this.getListaRoles();
    await this.getListaAreas();
    await this.getListaStatusAtendido();
    await this.getInternados();
    await this.getCitas();
  }

  setListaSexo(){
    this.listaSexo = [
                      {
                        "nombre": "Hombre",
                        "code": "H"
                      },
                      {
                        "nombre": "Mujer",
                        "code": "M"
                      }
                      ];
  }
  setListaStatusUser(){
    this.listaStatusUser = [
                      {
                        "nombre": "Activo",
                        "code": 1
                      },
                      {
                        "nombre": "Inactivo",
                        "code": 0
                      }
                      ];
  }

  getDescArea(id:number){
    return this.listaAreas.filter((area: any) => area.idArea == id)[0].descripcion;
  }
  getDesEstatusAtendido(id:number){
    return this.listaStsAtendido.filter((sts: any) => sts.idEstatus == id)[0].descripcion;
  }

  formmatDate(date: Date){
    var datePipe = new DatePipe('en-MX');
    return datePipe.transform(date, 'dd/MM/yyyy');
  }

  async getListUsuarios(){
    await this.consumo.catalogo(1)
        .then((response: any) =>{
          if(response.datos.length > 0){
            this.listaUsuarios = this.setNomFull(response.datos);
            this.listaPacientes = this.setNomFull(response.datos.filter((paciente: any) => paciente.idRol == 4));
            this.listaDoctores = this.setNomFull(response.datos.filter((doctor: any) => doctor.idRol == 2));
            this.listaEnfermeros = this.setNomFull(response.datos.filter((enfermero: any) => enfermero.idRol == 3));
          }
        })
        .catch(error => {
          console.log("Error => "+JSON.stringify(error))
        });
  }

  setNomFull(lista: any){
    for(let elm of lista){
      elm["nomCompleto"]=elm.nombre+" "+elm.paterno+" "+elm.materno;
    }
    return lista;
  }

  async getListaRoles(){
    await this.consumo.catalogo(2)
        .then((response: any) =>{
          if(response.datos.length > 0){
            this.listaRoles = response.datos;
          }
        })
        .catch(error => {
          console.log("Error => "+JSON.stringify(error))
        });
  }

  async getListaAreas(){
    await this.consumo.catalogo(3)
        .then((response: any) =>{
          if(response.datos.length > 0){
            this.listaAreas = response.datos;
          }
        })
        .catch(error => {
          console.log("Error => "+JSON.stringify(error))
        });
  }

  async getListaStatusAtendido(){
    await this.consumo.catalogo(4)
        .then((response: any) =>{
          if(response.datos.length > 0){
            this.listaStsAtendido = response.datos;
          }
        })
        .catch(error => {
          console.log("Error => "+JSON.stringify(error))
        });
  }
  async getCitas(){
    let obj = {
      operacion: 0,
      idCita: 0,
      idPaciente: "string",
      doctor: "string",
      idArea: 0,
      signos: "string",
      motivos: "string",
      tratamientoActual: "string",
      alergico: "string",
      receta: "string",
      atendida: 0,
      comentarios: "string", 
      fechaCita: "string"
    };
    await this.consumo.cita(obj)
    .then((response: any) => {
      if(response.codigo == 1 && response.datos.length > 0){
        this.listaCitas = response.datos;
        for(let internado of this.listaCitas){
          let objPac= this.listaUsuarios.filter((usuario:any) => usuario.idUsuario == internado.idPaciente)[0];
          let objDoc= this.listaUsuarios.filter((usuario:any) => usuario.idUsuario == internado.doctor)[0];
          internado["nombrePac"] = objPac.nombre+" "+objPac.paterno +objPac.materno;
          internado["nombreDoc"] = objDoc.nombre+" "+objDoc.paterno +objDoc.materno;
        }
      }
    })
    .catch(error => {
      console.log("Error"+error);
    });
  }

  async getInternados(){
    let obj = {
      operacion: 0,
      idInternado: 0,
      idPaciente: "string",
      doctor: "string",
      idArea: 0,
      idEstatus: 0,
      motivo: "string",
      fechaIngreso: "string",
      fechaSalida: "string"
    };
    await this.consumo.internados(obj)
    .then((response:any) => {
      if(response.codigo == 1 && response.datos.length > 0){
        var lista = [];
        lista = response.datos;
        for(let internado of lista){
          let objPac= this.listaUsuarios.filter((usuario:any) => usuario.idUsuario == internado.idPaciente)[0];
          let objDoc= this.listaUsuarios.filter((usuario:any) => usuario.idUsuario == internado.doctor)[0];
          internado["nombrePac"] = objPac.nombre+" "+objPac.paterno +objPac.materno;
          internado["nombreDoc"] = objDoc.nombre+" "+objDoc.paterno +objDoc.materno;
        }
        this.listaInternados = lista.filter((internado: any) => internado.idEstatus == 1);
        this.listaAltas = lista.filter((internado: any) => internado.idEstatus == 2);
      }
    })
    .catch(error => {
          console.log("Error => "+JSON.stringify(error));
    });
  }

  exportarExcel(datos: any, nombreArchivo: string) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(datos);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, nombreArchivo+".xlsx");
}

  validaSesion(){
   if(this.validaObjeto(this.SESSION) && this.SESSION.idRol != null && this.SESSION.idRol != undefined){
    return true;
   } 
   else{
    return false;
   }
  }

  validaObjeto(obj: any){
    if(Object.keys(obj).length > 0){
      return true;
    }
    else{
      return false;
    }
  }
  validNullEmptyundef(dato: any){
    if(dato != '' && dato != null && dato != undefined){
      return true;
    }
    else{
      return false;
    }
  }
}
