import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { FooterComponent } from "../footer/footer.component";
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [ReactiveFormsModule, FormsModule, FooterComponent, NavegacionComponent]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Enviando solicitud de login:', { username, password }); 
      this.loginService.ingresar(username, password).subscribe(
        response => {
          console.log('Respuesta del servidor:', response); 
          if (response != null) {
            localStorage.setItem('currentUser', JSON.stringify({ 
              username: username,
            }));
            this.router.navigate(['inicio']);
          } else {
            this.errorMessage = 'Usuario o contraseña incorrectos';
          }
        },
        error => {
          console.error('Error en la autenticación:', error);
          if (error instanceof HttpErrorResponse) {
            console.error('Estado del error:', error.status);
            if (error.status === 401) {
              this.errorMessage = 'Usuario o contraseña incorrectos';
            } else {
              this.errorMessage = 'Error en la autenticación';
            }
          } else {
            console.error('Mensaje de error:', error.message);
            this.errorMessage = 'Error en la autenticación';
          }
        }
      );
    }
  }

  formRegistro(){
    this.router.navigate(['registro']);
  }
}
