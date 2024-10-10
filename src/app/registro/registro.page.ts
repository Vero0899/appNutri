import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  // Lista de países con sus códigos telefónicos
  paises = [
    { nombre: 'Chile', codigo: '+56' },
    { nombre: 'Argentina', codigo: '+54' },
    { nombre: 'Perú', codigo: '+51' },
    // Agrega más países si es necesario
  ];

  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    // Inicializar el formulario vacío para evitar errores
    this.registroForm = this.fb.group({});
  }

  ngOnInit() {
    // Definir los campos y las validaciones del formulario
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, this.letrasValidator]],
      apellido: ['', [Validators.required, this.letrasValidator]],
      fechaNacimiento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, this.emailPatternValidator]],
      password: ['', [Validators.required, this.passwordValidator]],
      pais: ['', [Validators.required]],
      telefono: ['', [Validators.required, this.telefonoValidator]],
      aceptaTerminos: [false, [Validators.requiredTrue]],
    });
  }

  // Validador personalizado para permitir solo letras
  letrasValidator(control: AbstractControl) {
    const letrasPattern = /^[a-zA-Z\s]+$/;
    return letrasPattern.test(control.value) ? null : { letrasInvalidas: true };
  }

  // Validador personalizado para el formato del correo
  emailPatternValidator(control: AbstractControl) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(cl|com)$/;
    return emailPattern.test(control.value) ? null : { emailInvalido: true };
  }

  // Validador personalizado para la contraseña (mínimo 8 caracteres, 1 mayúscula, 1 número y 1 carácter especial)
  passwordValidator(control: AbstractControl) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordPattern.test(control.value) ? null : { passwordInvalida: true };
  }

  // Validador para el teléfono (9 dígitos)
  telefonoValidator(control: AbstractControl) {
    const telefonoPattern = /^\d{9}$/;
    return telefonoPattern.test(control.value) ? null : { telefonoInvalido: true };
  }

  // Función para manejar el registro
  registrar() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
      // Aquí puedes manejar el envío del formulario a tu backend o realizar otras acciones
    } else {
      console.log('Formulario inválido');
    }
  }

  // Función para navegar a la página 2
  goToPag2() {
    this.navCtrl.navigateBack('/pag2');
  }

  // Función para navegar al home
  goToHome() {
    this.navCtrl.navigateRoot('/home'); // Navegación al home
  }
}
