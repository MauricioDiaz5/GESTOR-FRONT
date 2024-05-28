import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-reporteo-internados',
  templateUrl: './reporteo-internados.component.html',
  styleUrls: ['./reporteo-internados.component.css']
})
export class ReporteoInternadosComponent implements OnInit {

  constructor(
                public generalService:GeneralServiceService
              ) { }

  ngOnInit(): void {
    console.log(this.generalService.listaReporteoInternados);
  }

  exportarReporte(){
    this.generalService.exportarExcel(this.generalService.listaReporteoInternados, "Reporte Internados -"+this.generalService.arrAreas[this.generalService.indexReportInt]);
  }
}
