import { Component, Input, OnInit, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Services/usuario.service';
import Swal from 'sweetalert2';
import { FooterComponent } from "../footer/footer.component";
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
    selector: 'app-registro',
    standalone: true,
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css'],
    imports: [MatFormFieldModule, MatButtonModule, MatInputModule, ReactiveFormsModule, MatSelectModule, FooterComponent, NavegacionComponent]
})
export class RegistroComponent implements OnInit{
  @Input('codigo') codigo: number | null = null;
  private usuarioService = inject(UsuarioService);
  public formBuild = inject(FormBuilder);

  constructor(private router: Router) { }

  public formUsuario: FormGroup = this.formBuild.group({
    idUsuario: [0],
    nombre: [""],
    apellido: [""],
    correo: [""],
    tipoDocumento: [""],
    nroDocumento: [0],
    username: [""],
    password: [""],
    telefono: [0],
    direccion: [""]
  });

  ngOnInit(): void {
    if (this.codigo && this.codigo !== 0) {
      this.usuarioService.obtener(this.codigo).subscribe({
        next: (data) => {
          if (data) {
            this.formUsuario.patchValue({
              idUsuario: data.idCliente,
              nombre: data.nombre,
              apellido: data.apellido,
              correo: data.correo,
              tipoDocumento: data.tipoDocumento,
              nroDocumento: data.nroDocumento,
              username: data.username,
              password: data.password,
              telefono: data.telefono,
              direccion: data.direccion
            });
          } else {
            console.log('No se encontraron datos para el código proporcionado');
          }
        },
        error: (err) => {
          console.log(err.message);
        }
      });
    }
  }


  registrarUsuario() {
    const username = this.formUsuario.value.username;
    this.usuarioService.existeNombreUsuario(username).subscribe(
      (existe: boolean) => {
        if (existe) {
          Swal.fire('Registro Denegado', 'El usuario ya existe', 'error');
        } else {
          const nuevoUsuario = {
            idCliente: this.formUsuario.value.idCliente,
            nombre: this.formUsuario.value.nombre,
            apellido: this.formUsuario.value.apellido,
            correo: this.formUsuario.value.correo,
            tipoDocumento: this.formUsuario.value.tipoDocumento,
            nroDocumento: this.formUsuario.value.nroDocumento,
            username: this.formUsuario.value.username,
            password: this.formUsuario.value.password,
            telefono: this.formUsuario.value.telefono,
            direccion: this.formUsuario.value.direccion
          };

          this.usuarioService.crear(nuevoUsuario).subscribe(
            response => {
              Swal.fire('Registro Exitoso', 'El usuario fue registrado', 'success');
              this.formUsuario.reset();
            },
            error => {
              Swal.fire('ERROR', 'Hubo un error al registrar el usuario', 'error');
            }
          );
        }
      },
      error => {
        Swal.fire('ERROR', 'Hubo un error al verificar el usuario', 'error');
      }
    );
  }

  formInicio() {
    this.router.navigate(['login']);
  }
}
