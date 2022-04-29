import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  emailUser = this.auth.getUserLog();
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver,
    private auth: AuthService,
    private router: Router,
  ) {

  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
  getUserLogged() {
    this.auth.getUserLog()
      .subscribe(resp => {
        console.log(resp?.email);
      });
  }
  ngOnInit(): void {
  }

}
