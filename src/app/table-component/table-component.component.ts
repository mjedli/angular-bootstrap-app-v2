import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  constructor(public appService : AppService, public router : Router) { }

  const MESSAGE_INFO:String = "You should select a component !";

  title:String = "Component";

  ngOnInit() {
  }

  add() {
    this.router.navigateByUrl("/add");
  }

  modify() {
    if (this.appService.currentIdSelected !== 0) {
      this.router.navigateByUrl("/modify");
    } else {
      this.appService.setAlertMessage(this.MESSAGE_INFO);
      this.router.navigateByUrl("/alert");
    }
  }

  remove() {
    if (this.appService.currentIdSelected !== 0) {
      this.router.navigateByUrl("/remove");
    } else {
      this.appService.setAlertMessage(this.MESSAGE_INFO);
      this.router.navigateByUrl("/alert");
    }
  }

  refresh() {
    this.router.navigateByUrl('/add', {skipLocationChange: true}).then(()=>
    this.router.navigateByUrl('/')); 
  }

}