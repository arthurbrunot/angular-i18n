import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  supportedLanguages: string[] = ['en', 'fr']

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
