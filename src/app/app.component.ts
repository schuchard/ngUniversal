import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <ul>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/lazy">Lazy</a></li>
  <li><a routerLink="/lazy/nested">Lazy_Nested</a></li>
  <li><a routerLink="/post/1">Post 1</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
