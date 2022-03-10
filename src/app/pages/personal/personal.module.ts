import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas/personas.component';
import { OperadoresComponent } from './operadores/operadores.component';
import { AusentismosComponent } from './ausentismos/ausentismos.component';



@NgModule({
  declarations: [
    PersonasComponent,
    OperadoresComponent,
    AusentismosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonalModule { }
