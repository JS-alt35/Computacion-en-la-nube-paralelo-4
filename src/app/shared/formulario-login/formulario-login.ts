import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-login',
  imports: [FormsModule],
  templateUrl: './formulario-login.html',
  styleUrl: './formulario-login.css',
})
export class FormularioLogin {

  email: string = '';
  password: string = '';

  public servicioAuth = inject(AuthService);
  private route = inject(Router);

  iniciarSession() {
    this.servicioAuth.login(this.email, this.password)
      .then(() => {
        alert('Bienvenido al sistema');
        this.route.navigate(['/registro']);
      })
      .catch(() => {
        alert('Correo o contraseña incorrecto');
      });
  }
}