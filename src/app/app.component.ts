import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentpage: any;

  public constructor(private route: Router) {

    this.changeRoute(route);
  }

  changeRoute(route) {
    route.events.subscribe(val => {
      if (val instanceof NavigationStart) {
        if (val.url.match('dashboard')) {
          this.change('dashboard')
        }
        else if (val.url.match('builders')) {
          this.change('builders')
        }
        else if (val.url.match('cars')) {
          this.change('cars')
        }
        else if (val.url.match('formers')) {
          this.change('formers')
        }
      }
    })
  }
  change(url) {
    this.currentpage=url;
  }
}
