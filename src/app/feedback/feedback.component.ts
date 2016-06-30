import {Component} from '@angular/core';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';


@Component({
    moduleId: module.id,
    selector: 'feedback',
    templateUrl: 'feedback.component.html',
    directives: [MD_BUTTON_DIRECTIVES]
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
