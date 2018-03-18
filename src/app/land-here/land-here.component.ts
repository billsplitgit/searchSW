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
  planets: Planets[] ;
  filteredPlanets: Planets[] = [];
  getPlanets() {
    this._getData.getPlanets().subscribe(data => {
      this.planets = data["results"];
      
    });
  }

  searchPlanets(val){
    this._getData.getPlanets().subscribe(data => {
      for(let i=0; i<data['results'].length; i++){
        
        if(data['results'][i].name.indexOf(val)>0){
          this.filteredPlanets.push(data['results'][i]);
          this.filteredPlanets.sort((a, b) => {
                return a < b ? -1 : 1;
             });
          console.log(this.filteredPlanets);
        }
      }
      
    }); 
  }

  ngOnInit() {
    this.getPlanets();
  }

}
