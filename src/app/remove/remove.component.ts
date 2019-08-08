import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MyComponent } from '../my.component';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(public appService : AppService) { }

  currentComponent:MyComponent  = { title: '', adresse: '', type: false };

  ngOnInit() {
  }

  removeComponent() {
    this.appService.removeComponent();
  }

}