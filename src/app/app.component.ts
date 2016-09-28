import { Component, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css'],
  providers:   [ ]
})
export class AppComponent {
//  @Input language: string;
  
  constructor(
    private translate: TranslateService
  ) {
    this.translateConfig();
  }

  translateConfig() {
    var path = document.location.pathname;
    var userLang = path.split("/")[1];
    userLang = /(pl|en|de|ru)/gi.test(userLang) ? userLang : 'pl';
    this.translate.setDefaultLang('pl');
    this.translate.use(userLang);
  }
}
