import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: [`
    a{
      text-decoration: none;
    }
    a.active{
      font-weight: bold;
    }
  `],
  template: `
    <nav>
      <a routerLink=""
      routerLinkActive="active"
      >
        Home
      </a>
      <a routerLink="contacts"
      routerLinkActive="active"
      >
        Contact
      </a>
    <nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
  