# angular-bootstrap-app-v2

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-bootstrap-app-v2)

# Présentation d'un projet angular :

### Version angular :

- Version Angular : 8+
- Version tutoriel : 1.0

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
- Un composant point sur une template (un fichier html) avec un selector qui représente une balis.
- Un composant point aussi sur un fichier css.
```
@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})
```
component-overview.component.html
```
<app-component-overview> </app-component-overview>
```