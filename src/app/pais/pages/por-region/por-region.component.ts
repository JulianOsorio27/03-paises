import { Component, OnInit } from '@angular/core';
import { Countrys } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = [ 'EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'         ];
  regionActivate:string = ''; 
  paises:Countrys[] = [];

  constructor( 
    private paisServices:PaisService   ) { }

  ngOnInit(): void {
  }

  activarRegion = ( region:string ) => {

    if (region === this.regionActivate ) {return; }

    this.regionActivate = region;
    this.paises = [];

    this.paisServices.buscarRegion( region )
      .subscribe( paises => this.paises = paises );

  }

  getClaseCSS = (region:string) => {
    return ( region === this.regionActivate ) ? ' btn btn-primary ': ' btn btn-outline-primary ';
  }

  
  
  

}
