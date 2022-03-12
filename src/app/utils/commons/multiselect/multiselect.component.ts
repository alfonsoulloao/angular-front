import { Component, Input} from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SelectBuscador } from '../../models/multiselect';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent {
  // valor de entrada desde el componente a usar
  @Input('valores')valorretorno:SelectBuscador;  
  
  // Variables de creacion
  listaDesplegable:any[];
  dropdownSettings:IDropdownSettings;

  // get con data a mostrar
  get valordata(){      
      this.listaDesplegable = this.valorretorno.items    
     return  this.listaDesplegable;
   }
  
  // get para crear las condiciones a mostarar 
  get dropseting(){        
    this.dropdownSettings = this.valorretorno.valoresConfg;
   return this.dropdownSettings;
  }  

 onItemSelect(item: any) {
  console.log(item);
  // console.log(this.valorretorno);
  }

  get milog(){    
    // console.log(this.valorretorno);
    return "valor"
  }
 
}