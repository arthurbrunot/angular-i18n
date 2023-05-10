import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
// translations workflow is done with @ngx-translate, preferred over i18n because it is easier to implement and
// maintain, and its usage is simpler.
export class AppComponent {
  supportedLanguages: string[] = ['en', 'fr', 'es']

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en'); // Set the default language

    // Use the browser's language by default if available
    const browserLang = translate.getBrowserLang() as string;
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
