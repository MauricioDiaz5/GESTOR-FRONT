import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {
  
  constructor(
              public generalService: GeneralServiceService
              ) { }

  ngOnInit(): void {
  }


}
