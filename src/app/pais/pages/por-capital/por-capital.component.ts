import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Countrys } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent   {

  constructor(private paisService: PaisService) { }

  termino:string = ''
  hayError:boolean = false;
  pais:Countrys[]= [];

  buscar = (termino:string) => {
    this.hayError=false;
    this.termino = termino;

    this.paisService.buscarCapital(termino).subscribe( paises =>{

      this.pais = paises;

    }, error => {
        this.hayError=true;
        this.pais=[];
    });
  }

  
}
