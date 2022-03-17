import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

// href="../assets/plugins/tablesaw-master/dist/tablesaw.css"
export class TablaComponent {
  // arreglo de los titulos a mostrar
  @Input() titulos: string[];
  //arreglo de los valores a cargar en la tabla
  @Input() filas: any[];
  //valor del icono a mostrar
  @Input() icono: string;
  //nombre en el arreglo del valor que sera un icono
  @Input() iconoKey: string;
  //
  @Input() enlace: string;
  //nombre de lal valor dentro de la fila que sera convertido en enlace
  @Input() enlaceKey: string;
  
  filasAcargar = [
    {nombre:"alfonso",apellidoP:"ulloa",apellidoM:"oyarzun",fechaNac:"07/01/1986", superPoder:"forConsecutivos",enlace:"/dashboard"},
    {nombre:"alfonso1",apellidoP:"ulloa",apellidoM:"oyarzun",fechaNac:"07/01/1986", superPoder:"whileConsecutivos",enlace:"/dashboard"},
    {nombre:"alfonso2",apellidoP:"ulloa",apellidoM:"oyarzun",fechaNac:"07/01/1986", superPoder:"CaseConsecutivos",enlace:"/dashboard"}, 
    {nombre:"alfonso3",apellidoP:"ulloa",apellidoM:"oyarzun",fechaNac:"07/01/1986", superPoder:"IfConsecutivos",enlace:"/dashboard"},
  ]
  // la llave es el nombre del parametro para cargar el icono 
  llaveIcono="icono";
  // la llave es el nombre del parametro del arreglo que deceamos mostrar como enlace
  llaveEnlace="enlace";

  @Output() verDetalle = new EventEmitter<number>();
  objectKeys = Object.keys;

  constructor() { 
    this.iconoKey= this.llaveIcono;
    this.enlaceKey = this.llaveEnlace;
    this.titulos= ["nombre","apellidoP","apellidoM","fechaNac","superPoder","enlace"]
    this.filas =this.filasAcargar;
    this.icono = "fa fa-id-card";
    this.enlace = "editar"
  }

  detalle(id: number){
    this.verDetalle.emit(id);    
    console.log(id);
    
  }


 
    

 
    
 
}
