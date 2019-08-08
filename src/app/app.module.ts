import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { TableComponent } from './table/table.component';
import { AddComponent } from './add/add.component';
import { ModifyComponent } from './modify/modify.component';
import { RemoveComponent } from './remove/remove.component';
import { AppService } from './app.service';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'modify', component: ModifyComponent },
  { path: 'remove', component: RemoveComponent },
  { path: '**', component: TableComponent }
];



@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, HelloComponent, ToolbarComponent, FooterComponent, TableComponentComponent, TableComponent, AddComponent, ModifyComponent, RemoveComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
