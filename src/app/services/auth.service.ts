import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { UsuarioModel } from '../models/usuario.models';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private auth: AngularFireAuth) {
  }

  async logout() {
    await this.auth.signOut();
  }

  async login(email: string, password: string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {

      console.log('error login', error);
      return null
    }

  }

  async signUp(email: string, password: string) {

    return this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.auth.currentUser.then((user) => {
          user.updateProfile({ displayName: email });
        })
      });

  }

  getUserLog() {
    return this.auth.authState;
  }
  getCurrentUser() {
    return this.auth.authState.pipe(map( auth => auth ));
  }
  
}
