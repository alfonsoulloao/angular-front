export interface ValoresConfg{
enableCheckAll:boolean;
 idField: string;
 textField: string;
 allowSearchFilter: boolean;
 clearSearchFilter:boolean;
 noDataAvailablePlaceholderText:string;
 closeDropDownOnSelection:boolean;
}

export interface ItemsDesplegable{
    item_id: string; 
    item_text: string;
}

export interface SelectBuscador{
    valoresConfg?:ValoresConfg;
    items:ItemsDesplegable[];
}