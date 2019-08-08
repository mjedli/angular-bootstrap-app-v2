import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright:String = "Copyright ";

  constructor() { }

  ngOnInit() {
    var currentDate = new Date();
    this.copyright = this.copyright + currentDate.getFullYear();
  }

}