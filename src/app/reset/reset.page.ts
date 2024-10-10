import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  resetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
    }, { validator: this.emailMatchValidator });
  }

  // Valida que los correos electrónicos coincidan
  emailMatchValidator(formGroup: FormGroup) {
    const email = formGroup.get('email')?.value;
    const confirmEmail = formGroup.get('confirmEmail')?.value;
    return email === confirmEmail ? null : { emailMismatch: true };
  }

  recuperarPassword() {
    if (this.resetForm.valid) {
      // Aquí iría la lógica para recuperar la contraseña
      console.log('Formulario válido', this.resetForm.value);
    }
  }

  goHome() {
    this.router.navigate(['/home']);  // Cambia esto si la ruta del home es diferente
  }
}







