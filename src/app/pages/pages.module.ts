import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { FaenaComponent } from './faena/faena.component';
import { ContratoComponent } from './contrato/contrato.component';




@NgModule({
  declarations: [
    PagesComponent, 
    DashboardComponent, 
    NopagefoundComponent, 
    ProgressComponent, 
    GraficaComponent, ClientesComponent, FaenaComponent, ContratoComponent ],
  exports:[PagesComponent,],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,  
  ]
})
export class PagesModule { }
