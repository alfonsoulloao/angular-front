import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RecoverPassComponent } from './auth/recoverpass/recoverpass.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FaenaComponent } from './pages/faena/faena.component';
import { ContratoComponent } from './pages/contrato/contrato.component';

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
