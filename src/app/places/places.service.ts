import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlacesService {

    constructor(private _http: Http) { }

    getPlaces() {
        return this._http.get('data/places.json')
            .map((response) => response.json());
    }

}
