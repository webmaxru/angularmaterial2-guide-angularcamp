import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'guide',
  templateUrl: 'guide.component.html',
  directives: [MD_BUTTON_DIRECTIVES, MdIcon],
  providers: [MdIconRegistry]
})
export class GuideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
