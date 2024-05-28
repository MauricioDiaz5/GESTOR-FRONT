import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-paciente-alta',
  templateUrl: './paciente-alta.component.html',
  styleUrls: ['./paciente-alta.component.css']
})
export class PacienteAltaComponent implements OnInit {

  
  constructor(
                public generalService:GeneralServiceService
               ) { }

  ngOnInit(): void {
  }

}
