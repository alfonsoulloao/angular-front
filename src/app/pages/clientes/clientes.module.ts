import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// mis modulos
import { SharedModule } from 'src/app/shared/shared.module';
// mis componentes
import { ClientesComponent } from './clientes/clientes.component';
import { FaenaComponent } from './faena/faena.component';
import { ContratoComponent } from './contrato/contrato.component';
// mis rutas
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UtilsModule } from 'src/app/utils/utils.module';

@NgModule({
  declarations: [
    ClientesComponent,
    FaenaComponent,
    ContratoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,      
    AppRoutingModule,
    UtilsModule,
    SharedModule,
    
  ]
})
export class ClientesModule { }
