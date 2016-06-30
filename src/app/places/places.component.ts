import {Component, OnInit} from '@angular/core';

import { PlacesService } from './places.service';
import { PlaceComponent } from './../place/place.component';

@Component({
    moduleId: module.id,
    selector: 'places',
    templateUrl: 'places.component.html',
    providers: [PlacesService],
    directives: [PlaceComponent]
})
export class PlacesComponent implements OnInit {

    places: any;

    constructor(private _placesService: PlacesService) { }

    ngOnInit() {
        this._placesService.getPlaces()
            .subscribe(places => this.places = places);
    }

    logVisited(placeName: string) {
        console.log('Event from child component: ' + placeName);
    }

}
