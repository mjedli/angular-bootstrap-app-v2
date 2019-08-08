import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public appService : AppService) { }

  alertMessage:String;

  ngOnInit() {
    this.alertMessage = this.appService.alertMessage;
  }

}