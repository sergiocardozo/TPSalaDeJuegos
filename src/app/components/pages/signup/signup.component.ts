import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  
  usuario: UsuarioModel = new UsuarioModel();
  errorMessage: string;
  error: boolean = false;
  message: string = '';

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if (form.invalid) { return; }
    
    const { email, password } = this.usuario;
    
    this.auth.signUp(email, password)
      .then((resp) => {         
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 3000);
      }).catch((err) => {
        console.log(err);
        this.error = true;
        this.errorMessage = "El usuario ya esta registrado";
        this.message = err;
        setTimeout(() => {
          this.errorMessage = '';
          this.error = false;
        }, 3000);
      });
  }
}

