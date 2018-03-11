import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { People } from '../ifsc';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private _getData: GetDataService,private _router: Router) { }
  people: People;
  name: string = "";
  b_y: string = "";
  
  getPeople() {
    this._getData.getPeople().subscribe(data => {
      this.people = data;
      this.name = data.name;
      this.b_y = data.birth_year;
    });
  }

  getDataToValidate() {
    let p = new Promise((resolve, reject) => {
      this._getData.getPeople().subscribe(
        data => {
          resolve(this.people = data["results"])
        },
        error => {
          reject(error)
        }
      )
    });
    return p;
  }

  validateLogin(userId, pwd) {
    this.getDataToValidate().then(
      data => {
        console.log(this.people);
        for (let x in this.people) {
          this.name = this.people[x].name;
          this.b_y = this.people[x].birth_year;
          if (userId === this.name && pwd === this.b_y) {
            localStorage.key = userId;
            localStorage.setItem(userId, pwd);
            //alert('Login Successful');
            this._router.navigate(['./search']);
            break;
          }

        }

      }
    )

  }

  ngOnInit() {
    //this.getPeople();
    //this.validateLogin();
  }

}
