import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NewsletterComponent } from './newsletter.component';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, TranslateModule.forRoot()],
      declarations: [NewsletterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display confirmation modal on valid form submission', () => {
    spyOn(component, 'showConfirmationModal');
    const emailInput: HTMLInputElement = fixture.nativeElement.querySelector('#email');
    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('#submitNewsletter');

    // Set a valid email address
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Submit the form
    submitButton.click();
    fixture.detectChanges();

    expect(component.showConfirmationModal).toHaveBeenCalled();
    fixture.detectChanges();
    expect(component.showModal).toBe(false);
  });


  it('should display error message on invalid form submission', () => {
    spyOn(component, 'showConfirmationModal');
    const emailInput: HTMLInputElement = fixture.nativeElement.querySelector('#email');
    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('#submitNewsletter');

    // Set an invalid email address
    emailInput.value = 'invalid-email';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Submit the form
    submitButton.click();
    fixture.detectChanges();

    expect(component.showConfirmationModal).not.toHaveBeenCalled();
    expect(component.showModal).toBe(false);
    expect(fixture.nativeElement.querySelector('#textError').innerText).not.toBe('');
  });
});
