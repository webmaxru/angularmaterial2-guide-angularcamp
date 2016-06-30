import {Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';

import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdUniqueSelectionDispatcher} from '@angular2-material/core';
import {MD_RADIO_DIRECTIVES} from '@angular2-material/radio';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: 'contact.component.html',
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
  ],
  providers: [MdUniqueSelectionDispatcher],
})
export class ContactComponent {

  feedbackObject: Object = {
    email: 'salnikov@gmail.com'
  };

  modelDrivenForm: FormGroup;

  constructor(formBuilder: FormBuilder) {

    this.modelDrivenForm = new FormGroup({
      email: new FormControl(),
      message: new FormControl("", Validators.required),
      type: new FormControl()
    });

    this.modelDrivenForm.controls['email'].valueChanges.subscribe(value => {
      console.log('Email changed = ' + value);
    });

  }

  onSubmitModelDrivenForm() {
    console.log('Model-driven form submitted:');
    console.log(this.modelDrivenForm.value);
  }

}
