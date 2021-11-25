import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first-time-angular';
  number = 1;
  serverName = '';

  // change(): any {
  //   this.number++;
  // }

  reset(): any {
    this.serverName = '';
    document.querySelector<HTMLInputElement>(`input`)?.focus();
  }
}
