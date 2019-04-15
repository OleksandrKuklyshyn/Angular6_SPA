import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularSPA';
  links = [
    { path: '/main', label: 'Головна', active: 'button-active'},
    { path: '/chat', label: 'Чат', active: 'button-active'}
  ];
}
