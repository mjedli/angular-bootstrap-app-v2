import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { MyComponent } from '../my.component';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  constructor(public appService : AppService) { }

  currentComponent:MyComponent  = { title: '', adresse: '', type: false };

  ngOnInit() {
    this.currentComponent = this.appService.getComponentByCurrentId();
  }

  modifyComponent() {
    this.appService.modifiyComponent(this.currentComponent);
  }

}