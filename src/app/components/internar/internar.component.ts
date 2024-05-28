import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConsumosService } from 'src/app/services/consumos.service';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-internar',
  templateUrl: './internar.component.html',
  styleUrls: ['./internar.component.css']
})
export class InternarComponent implements OnInit {

  paciente: any = {};

  constructor(
              public generalService: GeneralServiceService,
              public toastr: ToastrService,
              public consumo: ConsumosService
              ) { }

  ngOnInit(): void {
    this.initPaciente();
  }

  initPaciente(){
    this.paciente = {
      paciente: "",
      atiende: "",
      area: "",
      status: "",
      motivo:"",
      fechaIngreso:""
    };
  }

  async ingresarInternado(){
    console.log(this.paciente);
    if(this.generalService.validNullEmptyundef(this.paciente.paciente) &&
    this.generalService.validNullEmptyundef(this.paciente.area) &&
    this.generalService.validNullEmptyundef(this.paciente.atiende) &&
    this.generalService.validNullEmptyundef(this.paciente.motivo) &&
    this.generalService.validNullEmptyundef(this.paciente.status) &&
    this.generalService.validNullEmptyundef(this.paciente.fechaIngreso)){
      let obj = {
                  operacion: 1,
                  idPaciente: this.paciente.paciente.idUsuario,
                  doctor: this.paciente.atiende.idUsuario,
                  idArea: this.paciente.area.idArea,
                  idEstatus: this.paciente.status.idEstatus,
                  motivo: this.paciente.motivo,
                  fechaIngreso: this.generalService.formmatDate(this.paciente.fechaIngreso),
                  fechaSalida: ""
                };
    await this.consumo.internados(obj)
    .then((response:any) => {
      if(response.codigo == 1){
        this.initPaciente();
        this.generalService.getInternados();
        this.toastr.success("Se registro internado con exitro", 'Alta internado', 
        {
          positionClass: 'toast-top-right',
          closeButton: true,
          timeOut: 3000,
        });
      }
      else{
        this.toastr.warning("No se registro el internado con exito, intentelo de nuevo", 'Alta internado fallida', 
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
      this.toastr.warning("Faltan datos requeridos para el alta, valide por favor", 'Faltan datos', 
        {
          positionClass: 'toast-top-right',
          closeButton: true,
          timeOut: 3000,
        });
    }
  }

  setDocsArea(){
    this.generalService.listaDoctoresArea = [];
    this.generalService.listaDoctoresArea = this.generalService.listaDoctores.filter((doc: any) => doc.idArea == this.paciente.area.idArea);
  }  
}
