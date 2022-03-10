import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environmentEndpoids } from 'src/environments/environment';
import { ILoginResult } from '../models/dto/usuarioLoginDto';
import { IEnvelop } from '../models/envelop';
import { formatoEnvelop } from '../utils/util';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private _http: HttpClient) {}

  async  login(rutUsuario: string, password: string) {
   
    // convierto los valores ingresados en un objeto 
    let obj = {rutUsuario,password,};
    
    //tramnformo el objeto en formato de salida
    const data = formatoEnvelop(obj);
    
    //creo la url para el servicio
    const url = `${environmentEndpoids.BACK_FRONT}${environmentEndpoids.API_V1}core/usuarioLogin`;    
    
    //realizo llamada al servicio  
    
    const resultLogin = await firstValueFrom<IEnvelop<ILoginResult>>(
      await this._http.post<IEnvelop<ILoginResult>>(url,data));

    //modifico el valor para retornar una clase  
    let result:ILoginResult = resultLogin.body        
    return result;

  }


  @Output() disparadorDatosUsuario: EventEmitter<any> = new EventEmitter();

}
