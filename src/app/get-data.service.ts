import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { People } from './ifsc';

@Injectable()
export class GetDataService {

  private _peopleUrl = "https://swapi.co/api/people/"; //= "https://swapi.co/api/people/";
  private _planetsUrl = "https://swapi.co/api/planets/";
  
  constructor(private _httpc : HttpClient) { }

  getPeople(): Observable<People>{
    return this._httpc.get<People>(this._peopleUrl)
    .do(data => console.log('All: ' + JSON.stringify(data)));
    
  }

  getPlanets(): Observable<any>{
    return this._httpc.get<any>(this._planetsUrl);
  }

}
