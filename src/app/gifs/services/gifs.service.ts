import { Injectable } from '@angular/core';


//angular eleva el servicio a nivel global de la aplicación
//esto nos beneficia ya que necesitamos que se almacene la información desde cualquier punto
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];


  get historial()
  {
    
    return [...this._historial];
  }

  buscarGifs( query: string)
  {
    query = query.trim().toLowerCase();
    
    if( !this._historial.includes( query ) )
    {
      this._historial.unshift( query );
      //cortamos el historial de manera
      //que solo queden las 10 ultimas busquedas
      this._historial = this._historial.splice(0,10);
    }

    

    console.log(this._historial);    
  }


}
