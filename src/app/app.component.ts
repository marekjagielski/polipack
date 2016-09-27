import { Component }        from '@angular/core';
//import { Router }           from '@angular/router';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css'],
  providers:   [ ]
})
export class AppComponent {

  constructor(
//    private router:    Router,
    private translate: TranslateService
  ) {
    this.translateConfig();
  }

  translateConfig() {
    var userLang = navigator.language.split('-')[0];
    userLang = /(pl|en|de|ru)/gi.test(userLang) ? userLang : 'pl';
    this.translate.setDefaultLang('pl');
    this.translate.use(userLang);
  }
}
