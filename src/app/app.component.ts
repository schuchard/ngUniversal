import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="/post/1">Post 1</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
