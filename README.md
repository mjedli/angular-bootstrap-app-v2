# angular-bootstrap-app-v2

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-bootstrap-app-v2)

# Présentation d'un projet angular :

### Version angular :

- Version Angular : 8+
- Version tutoriel : 1.0

### Source :

- Angular docs : https://angular.io/docs
- Article developpez : https://iner-dukoid.developpez.com/tutoriels/web/introduction-framework-web-angular/

### Angular est un framework JavaScript complet

### Avec Angular on peut créer :

- Single Page App : sur une seule page web on peut tourner l'application de façon dynamique.
- Applications hybrides pour smartphone avec Ionic 4 ou encore Angular for NativeScript.
- Composants web qui peuvent être utilisés dans n'importe quels autres projets ou technologies web.
- Progressive Web Apps (PWA).

### Parmi les technologies qui gravitent autour d'Angular

- TypeScript : Angular utilise par défaut le langage TypeScript de Microsoft (JavaScript ES6, légèrement remanié).
- Redux : se présente comme un système de centralisation des données et des actions.
- Webpack : c'est le gestionnaire de ressources (CSS, images…) qui est intégré dans Angular
- Les tests unitaires : Jasmine & Karma

###  Angular : ce qu'il faut pour démarrer
- node.js : installer node.js (de préférence, la version LTS)
- Installation d'angular-cli avec terminal node :
```
npm install -g @angular/cli
```

###  Démarrer une application
- Utiliser angular/cli sous node pour céer un projet node :
```
ng new my-app
```
- Démmarer l'application 
```
cd my-app
ng serve --open
```
- Ouvrir l'application dans un navigateur avec ce lien : http://localhost:4200/

###  Angular c'est quoi ?

- Angular est un ensemble de composant.
- Un composant point sur une template (un fichier html).
- Un composant s'affiche dans un fichier html avec un selector qui représente une balis.
- Un composant point aussi sur un fichier css.
```
@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})
export class TableComponentComponent implements OnInit {
  
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
  }
}
```
Template : component-overview.component.html
```
<h3>{{name}}</h3>
```
index.html
```
<app-component-overview></app-component-overview>
```

### app.module

- app.module a pour seule fonctionnalité : le « point de démarrage ».
- Le module racine : app.module.ts représente le contexte de démarrage de l'application et ne dispose que d'un seul composant : app.component
- /src/app/app.module.ts

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

###  Angular MVC - MVVM
- MVC (Model-View-Controller) : le contrôleur manipule le modèle, la vue affiche le modèle
- MVVM (Model-View-ViewModel) : le modèle MVVM prend en charge la liaison de données bidirectionnelle entre View et ViewModel.

### APP ROUTING
The Class angular for routing
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

The html code : add the routerLink
```
<a class="nav-link active" routerLink="/home">
```

###  Angular Test Unitaire (Jasmine & Karma)

- Test de composant 

```
@Component({
  selector: 'lightswitch-comp',
  template: `
    <button (click)="clicked()">Click me!</button>
    <span>{{message}}</span>`
})
export class LightswitchComponent {
  isOn = false;
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
```

```
describe('LightswitchComp', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new LightswitchComponent();
    expect(comp.isOn).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isOn).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isOn).toBe(false, 'off after second click');
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new LightswitchComponent();
    expect(comp.message).toMatch(/is off/i, 'off at first');
    comp.clicked();
    expect(comp.message).toMatch(/is on/i, 'on after clicked');
  });
});
```

- Test de Service
```
@Injectable()
export class MasterService {
  constructor(private valueService: ValueService) { }
  getValue() { return this.valueService.getValue(); }
}
```

```
describe('MasterService without Angular testing support', () => {
  let masterService: MasterService;

 it('#getValue should return faked value from a fake object', () => {
    const fake =  { getValue: () => 'fake value' };
    masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });

});
```


