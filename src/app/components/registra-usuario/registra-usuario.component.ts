import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsumosService } from 'src/app/services/consumos.service';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-registra-usuario',
  templateUrl: './registra-usuario.component.html',
  styleUrls: ['./registra-usuario.component.css']
})
export class RegistraUsuarioComponent implements OnInit {

  usuario: any = {};

  constructor(
              public generalService: GeneralServiceService,
              public toastr: ToastrService,
              public consumo: ConsumosService,
              private cdk: ChangeDetectorRef
              ) { }

  ngOnInit(): void {
    this.initUsuario();
  }

  initUsuario(){
    this.usuario = {
      usuario: "",
      idRol: "",
      idArea: "",
      nombre: "",
      appaterno: "",
      apmaterno: "",
      edad: "",
      sexo: "",
      direccion: "",
      correo: "",
      telefono: "",
      contrasena: "",
      fechaAlta: "",
      activo: ""
    };
  }

  ngAfterContentChecked():void{
    this.cdk.detectChanges();
  }

  async registraUsuario(){
    this.usuario.fechaAlta = this.generalService.formmatDate(new Date());
    if(this.generalService.validNullEmptyundef(this.usuario.activo) && 
    this.generalService.validNullEmptyundef(this.usuario.nombre) &&
    this.generalService.validNullEmptyundef(this.usuario.appaterno) &&
    this.generalService.validNullEmptyundef(this.usuario.contrasena) && 
    this.generalService.validNullEmptyundef(this.usuario.correo) &&
    this.generalService.validNullEmptyundef(this.usuario.direccion) &&
    this.generalService.validNullEmptyundef(this.usuario.edad) &&
    this.generalService.validNullEmptyundef(this.usuario.fechaAlta) &&
    this.generalService.validNullEmptyundef(this.usuario.idRol) &&
    this.generalService.validNullEmptyundef(this.usuario.idArea) &&
    this.generalService.validNullEmptyundef(this.usuario.sexo) &&
    this.generalService.validNullEmptyundef(this.usuario.usuario)){
      let obj = {
                  idUsuario: this.usuario.usuario,
                  idRol: this.usuario.idRol.idRol,
                  idArea: this.usuario.idArea.idArea,
                  nombre: this.usuario.nombre,
                  paterno: this.usuario.appaterno,
                  materno: this.usuario.apmaterno,
                  edad: this.usuario.edad,
                  sexo: this.usuario.sexo.code,
                  direccion: this.usuario.direccion,
                  correo: this.usuario.correo,
                  contrasena: this.usuario.contrasena,
                  fechaAlta: this.usuario.fechaAlta,
                  activo: this.usuario.activo.code,
                  telefono: this.usuario.telefono.toString()
                };
    await this.consumo.setUsuario(obj)
    .then((response: any) => {
      console.log(response);
      if(response.codigo == 1){
        this.initUsuario();
        this.generalService.getListUsuarios();
        this.toastr.success("Se agrego al usuario con exito!", 'Alta usuario', 
        {
          positionClass: 'toast-top-right',
          closeButton: true,
          timeOut: 3000,
        });
      }
      else{
        this.toastr.warning("No se obtuvo exito en el alta de usuario", 'Alta sin exito', 
        {
          positionClass: 'toast-top-right',
          closeButton: true,
          timeOut: 3000,
        });
      }
    })
    .catch(error => {
      console.log("Error => "+error);
    });

    }
    else{
      this.toastr.warning("Faltan datos requeridos para el alta, valide sus datos", 'Datos incompletos', 
          {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: 3000,
          });
    }
    await this.generalService.getListUsuarios();
  }

}
