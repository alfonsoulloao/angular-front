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
  @Input('listaDatos')listaDatos:any[];  
  
  // Variables de creacion
  listaDesplegable:any[];
  dropdownSettings:IDropdownSettings;

  // get con data a mostrar
  get valordata(){      
      // this.listaDesplegable = this.valorretorno.items
      this.listaDesplegable = this.listaDatos
     return  this.listaDesplegable;
   }
  
  // get para crear las condiciones a mostarar 
  get dropseting(){
    if(this.valorretorno.valoresConfg!=null){      
      this.dropdownSettings = this.valorretorno.valoresConfg;
    } else{

      this.dropdownSettings = {
        enableCheckAll:false,
        idField: 'valor',
        textField: 'texto',
        allowSearchFilter: true,
        clearSearchFilter:true,
        noDataAvailablePlaceholderText:"sin valores",
        closeDropDownOnSelection:true
      }
    }
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