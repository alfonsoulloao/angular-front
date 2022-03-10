import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes/clientes.component';
import { FaenaComponent } from './faena/faena.component';
import { ContratoComponent } from './contrato/contrato.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ClientesComponent,
    FaenaComponent,
    ContratoComponent],
  imports: [
    CommonModule,    
    SharedModule,
    AppRoutingModule
  ]
})
export class ClientesModule { }
