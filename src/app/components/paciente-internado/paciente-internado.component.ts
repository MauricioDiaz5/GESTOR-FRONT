import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-paciente-internado',
  templateUrl: './paciente-internado.component.html',
  styleUrls: ['./paciente-internado.component.css']
})
export class PacienteInternadoComponent implements OnInit {

  pacientes: any = [];

  constructor(
              public generalService: GeneralServiceService
              ) { }

  ngOnInit(): void {
    
  }

}
