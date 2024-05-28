import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-citados',
  templateUrl: './citados.component.html',
  styleUrls: ['./citados.component.css']
})
export class CitadosComponent implements OnInit {

  pacientes: any = [];

  fechaConsulta: any;

 

  constructor(
              public generalService: GeneralServiceService
              ) { }

  ngOnInit(): void {
  }

}
