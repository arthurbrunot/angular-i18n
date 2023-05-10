import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NewsletterComponent } from './newsletter.component';

@NgModule({
  declarations: [NewsletterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [NewsletterComponent]
})
export class NewsletterModule { }
