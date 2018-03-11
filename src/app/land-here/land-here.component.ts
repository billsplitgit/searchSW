import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Planets } from '../ifsc';

@Component({
  selector: 'app-land-here',
  templateUrl: './land-here.component.html',
  styleUrls: ['./land-here.component.less']
})
export class LandHereComponent implements OnInit {

  constructor(private _getData: GetDataService) { }
  filterPlanet: string;
  planets: Planets;
  getPlanets() {
    this._getData.getPlanets().subscribe(data => {
      this.planets = data["results"];
      
    });
  }

  searchPlanets(){

  }
  ngOnInit() {
    this.getPlanets();
  }

}
