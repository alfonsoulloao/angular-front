import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environmentEndpoids } from 'src/environments/environment';
import { INavBarResult, IRespuestaNavBar } from '../models/dto/navBarDto';
import { IEnvelop } from '../models/envelop';
import { formatoEnvelop } from '../utils/util';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      titulo: 'Alfonso',
      icono: 'mdi mdi-gaguge',
      submenu: [
        {titulo: 'Main',url: '/'},
        {titulo: 'ProgressBar',url: '/progress'},
        {titulo: 'Graficas',url: '/grafica'},          
      ]
    }

  ]
  constructor(private _http: HttpClient) { }

  
  async valoresSideBar(usuarioId: any) {
   
    // convierto los valores ingresados en un objeto 
    let obj = {usuarioId};
    //tramnformo el objeto en formato de salida
    const data = formatoEnvelop(obj);
  
    //creo la url para el servicio
    const url = `${environmentEndpoids.BACK_FRONT}${environmentEndpoids.API_V1}core/navegacionUsuarioRol`;    
    
    //realizo llamada al servicio  
    const resultLogin = await firstValueFrom<IEnvelop<INavBarResult>>(
      await this._http.post<IEnvelop<INavBarResult>>(url,data));

    //modifico el valor para retornar una clase  
    let result:IRespuestaNavBar[] = resultLogin.body.valoresNavBar;
    return result;

  }




}
