import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-acciones2',
  templateUrl: './acciones2.component.html',
  styleUrls: ['./acciones2.component.css']
})
export class Acciones2Component implements OnInit {

  constructor(
              public generalService:GeneralServiceService,
              public router: Router
              ) { }

  ngOnInit(): void {
  }

  goReporteoInternados(idx: number, idA: number){
    this.generalService.indexReportInt = idx-1;
    this.generalService.listaReporteoInternados = this.generalService.listaInternados
    .filter((internado: any) => internado.idArea == idA);
    this.router.navigate(['reporteo-internados']);
  }

}
