import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES } from '@angular/router';

import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import { GuideComponent } from './guide/guide.component'
import { PlacesComponent } from './places/places.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_CHECKBOX_DIRECTIVES,
    MdIcon
  ],
  providers: [MdIconRegistry]
})
export class AppComponent {

  isFeedbackFormVisible: boolean = false;
  title = 'Barcelona Guide';

}
