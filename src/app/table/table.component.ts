import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { MyComponent } from '../my.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public appService : AppService) { }

  myComponent:MyComponent[];

  currentId:number;

  numberPages:number = 1;
  numberElement:number = 4;
  listOfPage:Array<number> = [];
  currentPage:number = 1;
  maxPage:number = 1;

  setTitleTri:boolean = true;
  setTitleAdresse:boolean = true;

  ngOnInit() {
    this.currentId = this.appService.currentIdSelected;

    let allComponent:MyComponent[];
    let start = 1;
    allComponent = this.appService.getAllComponent();

    this.myComponent = [];

    for (var t = (start-1)*this.numberElement; t < start*this.numberElement; t++) {
      if(allComponent[t] != null)
      this.myComponent.push(allComponent[t]);
    }

    let count = 0;
    for (var t = 0; t < allComponent.length; t++) {
        count = count +1;
        if (count === this.numberElement) {
          this.numberPages = this.numberPages+1;
          count = 0;
        }
    }

    if(count !== 0) {
      this.numberPages = this.numberPages+1;
    }

    for (var i = 1; i <= this.numberPages-1; i++) {
        this.listOfPage.push(i);
        this.maxPage = i;
    }
  }

  getAllComponentPerPage(start:number) {
    
    let allComponent:MyComponent[];
    allComponent = this.appService.getAllComponent();

    this.myComponent = [];

    for (var t = (start-1)*this.numberElement; t < start*this.numberElement; t++) {
      if(allComponent[t] != null)
      this.myComponent.push(allComponent[t]);
    }
    this.currentPage = start;
  }

  getAllComponentPerPageTri(byTitle:boolean, byAdresse:boolean) {
    
    let allComponent:MyComponent[];
    allComponent = this.appService.getAllComponent();

    if(byTitle) {
      this.sortListByTitle(allComponent);
    }
    
    if(byAdresse) {
      this.sortListByAdresse(allComponent);
    }
    
    this.myComponent = [];

    for (var t = (this.currentPage-1)*this.numberElement; t < this.currentPage*this.numberElement; t++) {
      if(allComponent[t] != null)
      this.myComponent.push(allComponent[t]);
    }
  }

  getAllComponentPrevPage() {
    if(this.currentPage > 1) {
      this.getAllComponentPerPage(this.currentPage-1);
    } 
  }

  getAllComponentNextPage() {
    if(this.currentPage < this.maxPage) {
      this.getAllComponentPerPage(this.currentPage+1);
    } 
  }

  onSelectRow(id:number, ischeked : boolean) {
    
    if(ischeked == true) {
      this.appService.setCurrentIdSelected(id);
    } else {
      this.appService.setCurrentIdSelected(0);
    }
  }

  sortListByTitle(myListComponent:MyComponent[]) {
    if(this.setTitleTri) {
      myListComponent.sort((a, b) => (a.title > b.title) ? 1 : -1);
      this.setTitleTri = false;
    } else {
      myListComponent.sort((a, b) => (a.title < b.title) ? 1 : -1);
      this.setTitleTri = true;
    }
  }

  sortListByAdresse(myListComponent:MyComponent[]) {
    if(this.setTitleAdresse) {
      myListComponent.sort((a, b) => (a.adresse > b.adresse) ? 1 : -1);
      this.setTitleAdresse = false;
    } else {
      myListComponent.sort((a, b) => (a.adresse < b.adresse) ? 1 : -1);
      this.setTitleAdresse = true;
    }
  }

}