import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// mis componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';

// mis Modulos
import { SharedModule } from '../shared/shared.module';
import { UtilsModule } from '../utils/utils.module';

//mis rutas
import { AppRoutingModule } from '../app-routing.module';
import { ClientesModule } from './clientes/clientes.module';


@NgModule({
  declarations: [
    PagesComponent, 
    DashboardComponent, 
    NopagefoundComponent, 
    ProgressComponent, 
    GraficaComponent,  ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule, 
      NgMultiSelectDropDownModule.forRoot(),
      
      // mis modulos
      SharedModule,
      UtilsModule,
      ClientesModule,
      
      // mis rutas
      AppRoutingModule,
    ],
    exports:[PagesComponent,DashboardComponent],
})
export class PagesModule { }
