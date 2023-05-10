import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html'
})
export class NewsletterComponent {
  emailForm: FormGroup;
  showModal: boolean = false;
  email: string = '';

  constructor(private translate: TranslateService) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    console.log(this.emailForm.value)
    if (this.emailForm.valid) {
      this.showConfirmationModal()
      this.email = this.emailForm.value.email;
    }
  }

  showConfirmationModal() {
    this.showModal = true;
  }
}