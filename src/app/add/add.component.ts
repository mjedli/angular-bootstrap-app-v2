import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MyComponent } from '../my.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public appService : AppService) { }

  currentComponent:MyComponent  = { title: '', adresse: '', type: false };

  ngOnInit() {

  }

  addComponent() {
    this.appService.addComponent(this.currentComponent);
  }

}