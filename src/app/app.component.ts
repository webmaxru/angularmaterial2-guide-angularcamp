import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES } from '@angular/router';

import { GuideComponent } from './guide/guide.component'
import { PlacesComponent } from './places/places.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Guide - Angular Material 2';
}
