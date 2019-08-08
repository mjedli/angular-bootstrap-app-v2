import { Injectable } from '@angular/core';
import { MyComponent } from '../my.component';

@Injectable()
export class AppService {

  constructor() { }

  list  : MyComponent[] = [
    {id : 1, title : "titre 3", adresse : "adresse 1", type : true},
    {id : 2, title : "titre 2", adresse : "adresse 4", type : false},
    {id : 3, title : "titre 1", adresse : "adresse 3", type : false},
    {id : 4, title : "titre 4", adresse : "adresse 2", type : false},
    {id : 5, title : "titre 5", adresse : "adresse 5", type : false},
    {id : 6, title : "titre 6", adresse : "adresse 7", type : true},
    {id : 7, title : "titre 8", adresse : "adresse 6", type : false},
    {id : 8, title : "titre 7", adresse : "adresse 9", type : false},
    {id : 9, title : "titre 10", adresse : "adresse 8", type : false},
    {id : 10, title : "titre 9", adresse : "adresse 10", type : false},
  ];

  currentIdSelected:number = 0;
  searchValue:String = "";

  public setSearchValue(searchValue:String) {
    this.searchValue = searchValue;
  }

  public setCurrentIdSelected(currentNumber:number) {
    this.currentIdSelected = currentNumber;
  }

  public addComponent(myComponent:MyComponent):void {

    let currentId = 1;

    let index = this.list.findIndex((e) => e.id === currentId);

    while(index !== -1) {
      currentId = currentId +1;
      index = this.list.findIndex((e) => e.id === currentId);
    }
    myComponent.id=currentId;
    this.list.push(myComponent);

  }

  public getComponentByCurrentId():MyComponent {
    return this.list.find(x => x.id == this.currentIdSelected);
  }

  public modifiyComponent(myComponent:MyComponent):void {
    const index = this.list.findIndex((e) => e.id === myComponent.id);

    if (index === -1) {
        this.list.push(myComponent);
    } else {
        this.list[index] = myComponent;
    }
  }

  public removeComponent() {
    const index = this.list.findIndex((e) => e.id === this.currentIdSelected);

    if (index !== -1) {
        this.list.splice(index, 1);
    }
    this.currentIdSelected = 0; 
  }

  public getAllComponent():MyComponent[] {
    let list : MyComponent[] = [];
    if(this.searchValue === "") {
      return this.list;
    } else {
      list = this.list.filter(
        e => ( (e.title.match(this.searchValue)) || (e.adresse.match(this.searchValue)))  
      );
      this.searchValue="";
      return list;
    }
  }
}