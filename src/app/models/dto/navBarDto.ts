
export interface IRespuestaNavBar {
    idMenu: number;
    tituloMenu:  string;
    iconoMenu:  string;
    subemenu:   SubmenuNavarDto[];     
}

//para obtener el submenu
export interface SubmenuNavarDto {
    
    idMenu: number;
    idSubMenu: number;
    subMenu:  string;
    url:  string;
    estado:  number;
}

export interface INavBarResult {
    valoresNavBar: IRespuestaNavBar[];
}



