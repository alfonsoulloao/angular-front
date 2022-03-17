import { Component, OnInit } from '@angular/core';
import { SelectBuscadorBasico, SelectBuscadorBasicoSalida } from 'src/app/utils/models/buscadorBasico';

@Component({
  selector: 'app-faena',
  templateUrl: './faena.component.html',
  styleUrls: ['./faena.component.css']
})
export class FaenaComponent implements OnInit {
   // lista para pasar al selectBox
   lista:SelectBuscadorBasico[]; 
   //valores para el manjo de la visivilidad de los componentes
   visibleTable:boolean;
   visibleClient:boolean;
   visibleStatusClient:boolean;

  constructor() { }

  ngOnInit(): void {
    this.visibleTable = false;
    this.visibleClient = false;
    this.visibleStatusClient = false;
    this.lista = [
      {id:"1",valor:"escondida"},
      {id:"2",valor:"otra"},
      {id:"3",valor:"otra2"},
      {id:"4",valor:"otra3"},
      {id:"5",valor:"otra4"},
      {id:"6",valor:"otra5"},
      {id:"7",valor:"otra6"},
    ];     
  }

  mesajeBuscadorBasico(valor:SelectBuscadorBasicoSalida){
      
    switch (valor.boton) {
      case 'buscar': 
          // solicitar valores de para cargar en la tabla, servicio a ser usado
          
          //busqueda por rut, nombre Cliente, razon social, sigla , todos 

          // si no tiene datos, los valores de la tabla son nulos y muestro alert

          // habilitar la tabla 
          this.visibleStatusClient = false;
          this.visibleClient = false
          this.visibleTable = true;
        break;
      case 'crear':
            this.visibleTable = false;
            this.visibleStatusClient = true;
            this.visibleClient = true
        break;
      default:
        break;
    }
    
}

}
