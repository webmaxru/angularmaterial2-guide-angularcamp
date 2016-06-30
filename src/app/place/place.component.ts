import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'place',
  templateUrl: 'place.component.html',
  styles: [`
  .visited {
    text-decoration: line-through;
  }
  md-card {
    margin-bottom: 1em;
  }
  `],
  inputs: ['name'],
  outputs: ['visit'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES
  ]
})
export class PlaceComponent {

  isVisited: boolean = false;

  public name: string;
  public visit: EventEmitter<any> = new EventEmitter();

  doVisit(placeName: string) {
    this.isVisited = !this.isVisited;
    this.visit.emit({ name: placeName });
  }

}
