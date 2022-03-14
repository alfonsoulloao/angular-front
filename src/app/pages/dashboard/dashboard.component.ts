import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/localService';
import { ItemsDesplegable, SelectBuscador, ValoresConfg } from 'src/app/utils/models/multiselect';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  valor:SelectBuscador;
  itemsDesp:ItemsDesplegable[]=[];
  valoreson:ValoresConfg;

  constructor(private readonly _localStorageService:LocalService) {}



  
  ngOnInit(): void {
    this.valor={
      items :[
        { item_id: "1", item_text: 'Mumbai' },
        { item_id: "2", item_text: 'Bangaluru' },
        { item_id: "3", item_text: 'Pune' },
        { item_id: "4", item_text: 'Navsari' },
        { item_id: "5", item_text: 'New Delhi' }
      ],
      valoresConfg:this.valoreson={
        enableCheckAll:false,
        idField: "item_id",
        textField: "item_text",
        allowSearchFilter: true,
        clearSearchFilter:true,
        noDataAvailablePlaceholderText:'sin datos',
        closeDropDownOnSelection:true
      }
    }
    this._localStorageService.setJsonValue('alfonso',{nombre:'alfonso'});
    let valor = this._localStorageService.getJsonValue('alfonso')
    console.log(valor);
    
  }



}
