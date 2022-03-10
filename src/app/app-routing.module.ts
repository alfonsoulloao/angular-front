import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RecoverPassComponent } from './auth/recoverpass/recoverpass.component';
import { ClientesComponent } from './pages/clientes/clientes/clientes.component';
import { FaenaComponent } from './pages/clientes/faena/faena.component';
import { ContratoComponent } from './pages/clientes/contrato/contrato.component';
import { TablaComponent } from './utils/commons/tabla/tabla.component';
import { PersonasComponent } from './pages/personal/personas/personas.component';
import { OperadoresComponent } from './pages/personal/operadores/operadores.component';
import { AusentismosComponent } from './pages/personal/ausentismos/ausentismos.component';


const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {path: 'clientes', component: ClientesComponent},
      {path: 'faenas', component: FaenaComponent},
      {path: 'contratos', component: ContratoComponent},    
      { path: 'grafica', component: GraficaComponent },
      { path: 'tabla', component: TablaComponent },
      
      
      { path: 'personas', component: PersonasComponent },
      { path: 'operadores', component: OperadoresComponent },
      { path: 'tabla', component: AusentismosComponent },
    


      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]
  },
  
  
  { path: 'login', component: LoginComponent },
  { path: 'recuperar', component: RecoverPassComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NopagefoundComponent },
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
