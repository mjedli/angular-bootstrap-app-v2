import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() title:String = "My App";
  searchLabel:String = "Search";
  searchValue:String="";
  
  constructor(public appService : AppService, public router : Router) { }

  ngOnInit() {
  }

  search() {
    this.appService.setSearchValue(this.searchValue);
    this.router.navigateByUrl('/add', {skipLocationChange: true}).then(()=>
    this.router.navigateByUrl('/')); 
  }

}