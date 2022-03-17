import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// componentes personales
import { PersonasComponent } from './personas/personas.component';
import { OperadoresComponent } from './operadores/operadores.component';
import { AusentismosComponent } from './ausentismos/ausentismos.component';

//modulos personales
import { UtilsModule } from 'src/app/utils/utils.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    PersonasComponent,
    OperadoresComponent,
    AusentismosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    UtilsModule
  ]
})
export class PersonalModule { }
