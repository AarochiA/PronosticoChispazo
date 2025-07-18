import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { EncryptDecryptService } from '../../../../infrastructure/helpers/encrypt-decrypt/encrypt-decrypt.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup;
  rememberMe = false;

  constructor(private fb: FormBuilder, private router: Router,  private encryptDecryptService: EncryptDecryptService,) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { usuario, password } = this.loginForm.value;

      sessionStorage.setItem('currentSesion', JSON.stringify({
        username: this.encryptDecryptService.encryptData(usuario),
        password: this.encryptDecryptService.encryptData(password),
        remenber: this.rememberMe
      }));

      localStorage.setItem('uuid', uuidv4());
      this.router.navigate(['home']);
      
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
