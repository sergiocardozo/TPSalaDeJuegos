import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  public isLogin: boolean;
  userName: string;
  userEmail: string;

  constructor(private auth: AuthService, private router: Router) { 
  }

  ngOnInit(): void {
    this.auth.getCurrentUser()
    .subscribe( auth => {
      if( auth ) {
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;
      } else {
        this.isLogin = false;
      }
    })
  }
  salir() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
  
}
