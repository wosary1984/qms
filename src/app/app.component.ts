import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //slove deep link issue, when deploy application to tomcat
  //tomcat rewrite rule will change deep link path = URI
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.queryParams.subscribe(queryParams => {
      const path = queryParams.path;
      const navigateTo = '/' + path;
      if (path) {
      this.router.navigate([navigateTo]);
    }
    });
  }
  title = 'qms';
}
