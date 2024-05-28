import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsumosService } from 'src/app/services/consumos.service';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: any = {
                  usuario: "",
                  contrasena: ""
                  };

  constructor(
              public generalService: GeneralServiceService,
              public consumo: ConsumosService,
              public toastr: ToastrService
              ) { }

  ngOnInit(): void {
  }

  async ingresar(){
    if(this.generalService.validNullEmptyundef(this.usuario.usuario) && this.generalService.validNullEmptyundef(this.usuario.contrasena)){
      await this.consumo.validaUsuario(this.usuario.usuario)
    .then((response: any)=> {
      if(response.datos == 1){
        this.login();
      }
      else
      {
        this.toastr.warning("No existe el usuario con el que intenta ingresar, valide sus datos", 'Usuario no valido', 
          {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: 3000,
          });
      }
    })
    .catch(error => {
      console.log("ocurrio el error: "+JSON.stringify(error));
    });
    }
    else{
      this.toastr.warning("Usuario y contraseña son requeridos", 'Datos incompletos', 
          {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: 3000,
          });
    }
    
  }
  async login(){
    await this.consumo.loginUsuario(this.usuario)
        .then((response: any) =>{
          this.generalService.SESSION = response.datos;
        })
        .catch(error => {
          console.log("Error => "+JSON.stringify(error))
        });
  }
 
}
