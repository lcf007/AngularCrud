import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoadingIndicator = true;
  constructor(private _router: Router) {
    // Subscribe to the router events observable
    this._router.events.subscribe((value) => {

      // On NavigationStart, set showLoadingIndicator to ture
      if (value instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }

      // On NavigationEnd or NavigationError or NavigationCancel
      // set showLoadingIndicator to false
      if (value instanceof NavigationEnd ||
        value instanceof NavigationError ||
        value instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
      }

    });
  }
}
