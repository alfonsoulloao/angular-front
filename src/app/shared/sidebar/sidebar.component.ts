import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavBarResult, IRespuestaNavBar } from 'src/app/models/dto/navBarDto';
import { IDatosUsuario } from 'src/app/models/dto/usuarioLoginDto';
import { SidebarService } from 'src/app/services/sidebar.service';

// declare function customInitFunctions(): void;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {  
  @Input() dataEntrante:IRespuestaNavBar[]=[];
  usuarioStorage:IDatosUsuario | undefined;
  constructor(private _service:SidebarService , private router: Router) {     
  }

  async valorNavBar(){   
    var valor = localStorage.getItem('idUsuario');    
    if( valor != null || valor != undefined){
      this.usuarioStorage = JSON.parse(valor);    
    }
    // console.log("resultado de la salida id");
    // console.log( this.usuarioStorage?.idUsuario );
    this.dataEntrante = await this._service.valoresSideBar(this.usuarioStorage?.idUsuario );
    // console.log("resultado de la salida");
    // console.log(this.dataEntrante);    
  }

  ngOnInit(): void {   
    this.valorNavBar()
  }
  

}
