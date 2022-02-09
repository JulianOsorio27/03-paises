import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countrys } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  constructor(private http:HttpClient) { }


  buscarPais = ( termino:string ):Observable<Countrys[]> => {
    const url = ` ${this.apiUrl}/name/${termino} `;

    return this.http.get<Countrys[]>( url );
  }

  buscarCapital = (termino:string):Observable<Countrys[]> => {
    const url = ` ${this.apiUrl}/capital/${termino} `;

    return this.http.get<Countrys[]>( url )
  }

  getBuscarPorCodigo = (id:string):Observable<Countrys> => {
    const url = ` ${this.apiUrl}/alpha/${id} `;

    return this.http.get<Countrys>( url )
  }
  
  buscarRegion = ( region:string ):Observable<Countrys[]> => {
    const url = `https://restcountries.com/v2/regionalbloc/${region}`;
  

    return this.http.get<Countrys[]>(url);
  }

}
