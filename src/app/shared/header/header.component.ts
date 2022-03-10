import { Component, OnInit } from '@angular/core';
import { IDatosUsuario } from 'src/app/models/dto/usuarioLoginDto';
// declare function customInitFunctions(): void;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nombre:string='';
  correo:string='';  
  constructor() { }
  valoresHeader(){
    let userStorage:IDatosUsuario;
    var valor = localStorage.getItem('idUsuario');    
    if( valor != null || valor != undefined){
      userStorage = JSON.parse(valor);        
      this.nombre = userStorage.nombre+' '+userStorage.apellidoPaterno
      this.correo = userStorage.correoElectronico
  }else{
    console.log("valor malo");
    
  }
  }

  ngOnInit(): void {
    this.valoresHeader()
  }
  

}
