import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css']
})
export class AlertErrorComponent implements OnInit {

  @Input() errorMessage!: string;
  @Input() message!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
