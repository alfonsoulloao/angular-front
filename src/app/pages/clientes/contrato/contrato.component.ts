import { Component, OnInit } from '@angular/core';
import { SelectBuscadorBasico, SelectBuscadorBasicoSalida } from 'src/app/utils/models/buscadorBasico';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.css']
})
export class ContratoComponent implements OnInit {
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
      {id:"1",valor:"cliente mas faena"},
      {id:"2",valor:"cliente mas faena"},
      {id:"3",valor:"cliente mas faena"},
      {id:"4",valor:"cliente mas faena"},
      {id:"5",valor:"cliente mas faena"},
      {id:"6",valor:"cliente mas faena"},
      {id:"7",valor:"cliente mas faena"},
      
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
            this.visibleStatusClient =false;
            this.visibleClient = true
        break;
      default:
        break;
    }
    
}


}
