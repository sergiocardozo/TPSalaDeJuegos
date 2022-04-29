import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  emailUser = this.auth.getCurrentUser();
  constructor(private auth: AuthService) { 
  }

  ngOnInit(): void {
    
  }
  getUserLogged() {
    this.auth.getUserLog()
      .subscribe(resp => {
        console.log(resp?.email);
      });
  }
}
