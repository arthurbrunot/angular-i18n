import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {AppComponent} from "./app.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {ReactiveFormsModule} from "@angular/forms";
import {NewsletterComponent} from "./newsletter/newsletter.component";

describe('HomePage', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, NewsletterComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => {
              return new TranslateHttpLoader(http, './assets/i18n/', '.json');
            },
            deps: [HttpClient]
          }
        })
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should translate the content correctly', () => {
    translateService.setTranslation('en', {
      'navbar.home': 'Home',
      'navbar.about': 'About',
      'navbar.services': 'Services',
      'navbar.contact': 'Contact'
      // Add more translations for other content in your component
    });
    translateService.use('en');
    fixture.detectChanges();

    // Verify that the translated content is displayed correctly
    const navbarElement: HTMLElement = fixture.nativeElement.querySelector('#navbar');
    expect(navbarElement.textContent).toContain('Home');
    expect(navbarElement.textContent).toContain('About');
    expect(navbarElement.textContent).toContain('Services');
    expect(navbarElement.textContent).toContain('Contact');
    // Add more expectations for other translated content in your component
  });

  it('should update the language on select change', () => {
    spyOn(component, 'changeLanguage');
    const selectElement: HTMLSelectElement = fixture.nativeElement.querySelector('#language');

    // Simulate a select change event
    selectElement.value = 'fr';
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.changeLanguage).toHaveBeenCalledWith('fr');
  });
});
