import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    this.router.navigate(['home']);
  }
  goRegistraUsuario(){
    this.router.navigate(['registra-usuario']);
  }
  goPaciente(){
    this.router.navigate(['paciente']);
  }
  goInternar(){
    this.router.navigate(['internar-paciente']);
  }
  goPacientesInternados(){
    this.router.navigate(['pacientes-internados']);
  }
  goPacientesAlta(){
    this.router.navigate(['pacientes-alta']);
  }
  goCitados(){
    this.router.navigate(['citados']);
  }
  goDoctores(){
    this.router.navigate(['doctores']);
  }
  goEnfermeros(){
    this.router.navigate(['enfermeros']);
  }
}

