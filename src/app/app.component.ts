import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ConsumosService } from './services/consumos.service';
import { GeneralServiceService } from './services/general-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
              public consumo: ConsumosService,
              public generalService: GeneralServiceService,
              private cdk: ChangeDetectorRef
            ){

  }

  ngOnInit(): void {
  }

  ngAfterContentChecked():void{
    this.cdk.detectChanges();
  }


 
}
