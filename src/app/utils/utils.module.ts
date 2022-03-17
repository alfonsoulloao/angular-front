import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

//mis componenetes
import { TablaComponent } from './components/tabla/tabla.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
import { ModalComponent } from './components/modal/modal.component';
import { BuscadorBasicoComponent } from './components/buscador-basico/buscador-basico.component';


@NgModule({
  declarations: [
    TablaComponent,
    MultiselectComponent,
    ModalComponent,
    BuscadorBasicoComponent
  ],
  exports:[
    TablaComponent,
    MultiselectComponent,
    ModalComponent,
    BuscadorBasicoComponent
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    // modulos de rutas
    AppRoutingModule,
  ]
})
export class UtilsModule { }
