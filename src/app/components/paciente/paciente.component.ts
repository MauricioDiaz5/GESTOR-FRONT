import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsumosService } from 'src/app/services/consumos.service';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  paciente: any = {};

  constructor(
              public generalService: GeneralServiceService,
              public consumo: ConsumosService,
              public toastr: ToastrService,
              private cdk: ChangeDetectorRef
              ) { }

  ngOnInit(): void {
    this.initPaciente()
  }

  ngAfterContentChecked():void{
    this.cdk.detectChanges();
  }

  initPaciente(){
    this.paciente = {
      paciente: "",
      atiende: "",
      area: "",
      signos: "",
      motivo:"",
      tratamientoActual:"",
      alergico:"", 
      fechaCita: ""
    };
  }
  setDocsArea(){
    this.generalService.listaDoctoresArea = [];
    this.generalService.listaDoctoresArea = this.generalService.listaDoctores.filter((doc: any) => doc.idArea == this.paciente.area.idArea);
  }

 async registrarCita(){
  console.log(this.paciente);
  let obj = {
              Operacion: 1,
              idPaciente: this.paciente.paciente.idUsuario,
              doctor: this.paciente.atiende.idUsuario,
              idArea: this.paciente.area.idArea,
              signos: this.paciente.signos,
              motivos: this.paciente.motivo,
              tratamientoActual: this.paciente.tratamientoActual,
              alergico: this.paciente.alergico,
              receta: "",
              atendida: 0,
              comentarios: "",
              fechaCita: this.generalService.formmatDate(this.paciente.fechaCita)
            };
    console.log(obj);
   await this.consumo.cita(obj)
   .then((response: any) => {
    console.log(response);
      if(response.codigo == 1){
        this.initPaciente();
        this.generalService.getCitas();
        this.toastr.success("Se registro la cita con exito", 'Alta cita', 
          {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: 3000,
          });
      }
      else{
        this.toastr.warning("No se obtuvo exito al registrar la cita, intentelo de nuevo", 'Fallo registro cita ', 
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
}
