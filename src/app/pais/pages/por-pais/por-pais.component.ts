import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Countrys } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }

    `
  ]
})
export class PorPaisComponent  {

  constructor(private paisService: PaisService) { }

  termino:string = ''
  hayError:boolean = false;
  pais:Countrys[]= [];
  paisSugeridos:Countrys[]= [];
  mostrarSugerencias:boolean = false;

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
    this.termino = termino;
    this.mostrarSugerencias =true;

    this.paisService.buscarPais(termino)
    .subscribe( paises => this.paisSugeridos=paises.splice(0,5),
    (err) => this.paisSugeridos = [] );
    
  }

  buscarSugeridos = (termino:string) => {
    this.buscar(termino);

  }

 
}
