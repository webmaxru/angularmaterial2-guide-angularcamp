import { provideRouter, RouterConfig } from '@angular/router';

import { GuideComponent } from './guide/guide.component'
import { PlacesComponent } from './places/places.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';

export const routes: RouterConfig = [
  { path: '', component: GuideComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
