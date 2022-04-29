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

  isLogin: boolean;
  userEmail: string;

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor( private auth: AuthService,
    private router: Router
  ) {  }

  onLogOut() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
  
  ngOnInit(): void {
    this.auth.getCurrentUser()
    .subscribe( auth => {
      if( auth ) {
        this.isLogin = true;
        this.userEmail = auth.email;
        console.log(auth.email)
      } else {
        this.isLogin = false;
      }
    })
  }

}
