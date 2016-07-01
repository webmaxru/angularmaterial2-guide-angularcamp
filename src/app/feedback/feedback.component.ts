import {Component} from '@angular/core';

import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';

@Component({
  moduleId: module.id,
  selector: 'feedback',
  templateUrl: 'feedback.component.html',
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_CHECKBOX_DIRECTIVES
  ],
  styles: [`
  form {
    display: flex;
    flex-direction: column;
  }
  md-input {
    margin-bottom: 1em;
  }
  `]
})
export class FeedbackComponent {

  feedbackObject: Object = {
    email: 'salnikov@gmail.com'
  };

  onSubmitTemplateDrivenForm(value: any) {
    console.log('Template-driven form submitted:');
    console.log(value);
  }

}
