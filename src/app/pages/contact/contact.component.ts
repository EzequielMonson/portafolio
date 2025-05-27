import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import { Output, EventEmitter } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule, FontAwesomeModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faCheck = faCheck;
  enviando: boolean = false;
  mensajeEnviado: boolean = false;
  contactForm: FormGroup;
  @Output() cerrarFormulario = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder, private emailService: EmailService, private toastService: ToastService ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  sendEmail() {
    if (this.contactForm.valid) {
      this.enviando = true; // 🔵 Mostrar "Enviando mensaje..."
      this.emailService.sendMessage(this.contactForm.value).subscribe({
        next: () => {
          this.enviando = false;
          this.mensajeEnviado = true; // 🟢 Mostrar "Mensaje enviado"
          this.toastService.showExito('¡Mensaje enviado con éxito!');

          // ⏱️ Cerrar el formulario después de 3 segundos
          setTimeout(() => {
            this.cerrarFormulario.emit(false);
          }, 3000);
        },
        error: (err) => {
          this.enviando = false;
          this.toastService.showError('Error al enviar el mensaje.');
        },
      });
    } 
  }
  formHasErrors(): boolean {
    return Object.values(this.contactForm.controls).some(control => control.invalid && control.touched);
  }
  
  
  cerrar() {
    this.cerrarFormulario.emit(false); 
  }
}

