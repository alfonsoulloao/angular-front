import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';





@NgModule({
  declarations: [
    PagesComponent, 
    DashboardComponent, 
    NopagefoundComponent, 
    ProgressComponent, 
    GraficaComponent,  ],
  exports:[PagesComponent,],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,  
  ]
})
export class PagesModule { }
