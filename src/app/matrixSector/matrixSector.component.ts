import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';

@Component({ // Add the @Component decorator.
  selector: 'matrix-sector', 
  templateUrl: './matrixSector.component.html',
  styleUrls: ['./matrixSector.component.css']
})


export class SectorComponent { 

  sektorinimi: any;

  constructor() { 
    this.sektorinimi = environment.sektorNimi;
  }

}