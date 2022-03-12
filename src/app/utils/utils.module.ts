import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { TablaComponent } from './commons/tabla/tabla.component';
import { MultiselectComponent } from './commons/multiselect/multiselect.component';


@NgModule({
  declarations: [
    TablaComponent,
    MultiselectComponent
  ],
  exports:[
    TablaComponent,
    MultiselectComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UtilsModule { }
