import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  usuario;

  mostrarChat = false;
  mensaje: string = '';
  elemento: any;

  constructor(private auth: AuthService,
    public chatS: ChatService) {
    this.chatS.cargarMensajes()
      .subscribe( () => {
        setTimeout(() => {
          this.elemento = document.getElementById('contenedorMensajes');
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20);
      });
  }

  ngOnInit(): void {

    this.auth.getCurrentUser().subscribe(user => {
      this.usuario = user
    });

    
  }


  enviarMensaje() {

    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
      return;
    }

    this.chatS.agregarMensaje(this.mensaje)
      .then(() => { this.mensaje = ''; })
      .catch((err) => {
        console.log('error al guardar', err);
      })

  }

  
}
