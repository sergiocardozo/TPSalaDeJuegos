import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

interface Msg {
  email: string,
  mensaje: string,
  fecha?: number,
  uid?: string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  chats : Msg[]= [];
  usuario: any = {};

  constructor( private afs: AngularFirestore,
              private auth: AuthService) {
    
    auth.getCurrentUser().subscribe( user => {
      if(!user) {return;}
      this.usuario.email = user.displayName;
      this.usuario.uid = user.uid;
    })
    
  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Msg>('chats', ref => ref.orderBy('fecha', 'desc').limit(5));

    return this.itemsCollection.valueChanges()
      .pipe(map( (mensajes: Msg[]) => {
        console.log(mensajes);

        this.chats = [];

        for( let mensaje of mensajes ) {
          this.chats.unshift( mensaje );
        }

        return this.chats;
      }));
  }

  agregarMensaje( texto: string) {
    let mensaje: Msg = {
      email: this.usuario.email,
      mensaje: texto,
      fecha: new Date().getDate(),
      uid: this.usuario.uid
    }

    return this.itemsCollection.add( mensaje );
  }

}
