import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-enfermeros',
  templateUrl: './enfermeros.component.html',
  styleUrls: ['./enfermeros.component.css']
})
export class EnfermerosComponent implements OnInit {
 
  constructor(
                public generalService: GeneralServiceService
              ) { }

  ngOnInit(): void {
  }

}
