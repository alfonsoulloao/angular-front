import { Component,  Input,  OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  @Input() dataEntrante:any;
  
  constructor(private _serviceLogin:LoginService, private router: Router) {}

  ngOnInit(): void {
  }

  async clickLogin(loginForm:NgForm){ 
    let resultado;
    
    //evalua campos de del login y arroja mensajes 
    if(loginForm.value.usuarioRut == ''|| loginForm.value.password == '' ){
      Swal.fire({
        title: 'Error!',
        text: 'Debe ingresar los antecedentes ',
        icon: 'error',
        confirmButtonText: 'Regresar'
      })
    }else{
      try {
        //si el usuario ingresa rut y pass, realizo solicitud a servis de login
        resultado = await this._serviceLogin.login(loginForm.value.usuarioRut,loginForm.value.password);  

        if(resultado.loginResult.dataLogin.estado != "ok"){
          Swal.fire({
            title: 'Error!',
            text: resultado.loginResult.dataLogin.clave.toString(),
            icon: 'error',
            confirmButtonText: 'Regresar'
          })
          this.router.navigateByUrl('/login')
          
        }else{
          
          localStorage.setItem('idUsuario', JSON.stringify(resultado.loginResult.datosUsuarios))
          
          this.router.navigateByUrl('/dashboard')
        }
  
      } catch (err) {
          console.log(err);              
      }



    }

   
  }

}
