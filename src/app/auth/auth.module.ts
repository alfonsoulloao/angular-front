import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecoverPassComponent } from './recoverpass/recoverpass.component';



@NgModule({
  declarations: [ LoginComponent, RegisterComponent, RecoverPassComponent],
  exports:[ LoginComponent],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule]
})
export class AuthModule { }
