import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Countrys } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  constructor(private paisService: PaisService) { }

  termino:string = ''
  hayError:boolean = false;
  pais:Countrys[]= [];

  buscar = (termino:string) => {
    this.hayError=false;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe( paises =>{

      this.pais = paises;

    }, error => {
        this.hayError=true;
        this.pais=[];
    });
  }

  sugerencias=(termino:string)=>{
    this.hayError=false;
    
  }

 
}
