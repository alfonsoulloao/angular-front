import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { SelectBuscadorBasico, SelectBuscadorBasicoSalida } from '../../models/buscadorBasico';
import clRut, { validate } from '@fiquu/cl-rut';


@Component({
  selector: 'app-buscador-basico',
  templateUrl: './buscador-basico.component.html',
  styleUrls: ['./buscador-basico.component.css']
})
export class BuscadorBasicoComponent implements OnInit {
  tituloSelect= "Seleccione Valor";
  @Input('listaBuscador') lista:SelectBuscadorBasico[];  
  @Output('buscadorOut') buscadorOut =new EventEmitter<SelectBuscadorBasicoSalida>();
  // {buscadorListaOut:string,valoringresadoOut:string,boton:string}>();
  constructor() { }

  ngOnInit(): void {    
    this.lista = [
      {id:"1",valor:"Rut"},
      {id:"2",valor:"Nombre"},
      {id:"3",valor:"Cliente"},
      {id:"4",valor:"Razon Social"},
      {id:"5",valor:"Sigla"},
      {id:"6",valor:"Todos"}
    ];     
  }

  
  clickBuscadorBasicoBuscar(buscadorBasicoform:NgForm){
    //si el titulo es vacio  o se llama como el tiulo por defecto alert
    
    if(buscadorBasicoform.value.buscadorlista == '' ||  buscadorBasicoform.value.buscadorlista == this.tituloSelect){
      Swal.fire({
        title: 'Error!',
        text: 'Debe Seleccionar un tipo de busqueda ',
        icon: 'error',
        confirmButtonText: 'Regresar'
      })      
    }else{
      // validar
      // let nombre = format(buscadorBasicoform.value.valoringresado, true);    
      if(buscadorBasicoform.value.buscadorlista == 'Rut' && !validate(buscadorBasicoform.value.valoringresado)){
        Swal.fire({
          title: 'Error!',
          text: 'Rut Incorrecto',
          icon: 'error',
          confirmButtonText: 'Regresar'
        }) 
      }else{        
        let selectSalida:SelectBuscadorBasicoSalida = {
          valorLista:buscadorBasicoform.value.buscadorlista.toString(),
          valorTexto:buscadorBasicoform.value.valoringresado.toString(),
          boton: "buscar"
        }
        return this.buscadorOut.emit(selectSalida)
        // {
        //   buscadorListaOut:  buscadorBasicoform.value.buscadorlista.toString(),
        //   valoringresadoOut: buscadorBasicoform.value.valoringresado.toString(),
        //   boton:"buscar"})  
              
      }      
      
    }
  }

  clickBuscadorBasicoCrear(buscadorBasicoform:NgForm){ 
    let selectSalida:SelectBuscadorBasicoSalida = {
      valorLista:buscadorBasicoform.value.buscadorlista.toString(),
      valorTexto:buscadorBasicoform.value.valoringresado.toString(),
      boton: "crear"
    }
    return this.buscadorOut.emit(selectSalida)
      // {
      //   ,
      //   valoringresadoOut: buscadorBasicoform.value.valoringresado.toString(),
      //   boton:"crear"})
    console.log(this.buscadorOut);
    
    
  }
 
}
