import { Injectable } from '@angular/core';
import { MyComponent } from '../my.component';

@Injectable()
export class AppService {

  constructor() { }

  list  : MyComponent[] = [
    {id : 1, title : "title 3", adresse : "address 1", type : true},
    {id : 2, title : "title 2", adresse : "address 4", type : false},
    {id : 3, title : "title 1", adresse : "address 3", type : false},
    {id : 4, title : "title 4", adresse : "address 2", type : false},
    {id : 5, title : "title 5", adresse : "address 5", type : false},
    {id : 6, title : "title 6", adresse : "address 7", type : true},
    {id : 7, title : "title 8", adresse : "address 6", type : false},
    {id : 8, title : "title 7", adresse : "address 9", type : false},
    {id : 9, title : "title 9", adresse : "address 8", type : false},
  ];

  currentIdSelected:number = 0;
  searchValue:String = "";

  alertMessage:String = "";

  /*
  * setAlertMessage
  */
  public setAlertMessage(alertMessage:String) {
    this.alertMessage = alertMessage;
  }

  /*
  * setSearchValue
  */
  public setSearchValue(searchValue:String) {
    this.searchValue = searchValue;
  }

  /*
  * setCurrentIdSelected
  */
  public setCurrentIdSelected(currentNumber:number) {
    this.currentIdSelected = currentNumber;
  }

  /*
  * addComponent
  */
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

  /*
  * getComponentByCurrentId
  */
  public getComponentByCurrentId():MyComponent {
    return this.list.find(x => x.id == this.currentIdSelected);
  }

  /*
  * modifiyComponent
  */
  public modifiyComponent(myComponent:MyComponent):void {
    const index = this.list.findIndex((e) => e.id === myComponent.id);

    if (index === -1) {
        this.list.push(myComponent);
    } else {
        this.list[index] = myComponent;
    }
  }

  /*
  * removeComponent
  */
  public removeComponent() {
    const index = this.list.findIndex((e) => e.id === this.currentIdSelected);

    if (index !== -1) {
        this.list.splice(index, 1);
    }
    this.currentIdSelected = 0; 
  }

  /*
  * getAllComponent
  */
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