import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  //pasar valor de titulo de modal a una clase
  tituloModal:string="nuevo titulo Grafica ++ ";
  valorDeFecha:any;
  constructor() { }

  ngOnInit(): void {
  }

  fetchDateSelected(){
    console.log("valor seleccionado "+this.valorDeFecha);
    
  }

}
