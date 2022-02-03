import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Countrys } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!:Countrys;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService:PaisService) { }

  ngOnInit(  ):void  {

    this.activateRoute.params.pipe( switchMap( ({id}) => this.paisService.getBuscarPorCodigo(id) ),
     tap( console.log ) )   
      .subscribe( pais =>  this.pais=pais[0] );

    // this.activateRoute.params.subscribe( ({id}) =>{
    //   this.paisService.getBuscarPorCodigo(id).subscribe( pais => {
    //     console.log(pais);
    //   });
            
    // } );
  }

}
