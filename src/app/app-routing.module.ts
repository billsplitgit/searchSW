import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandHereComponent } from './land-here/land-here.component';

const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'login'  },
  { path: 'login', component: LoginComponent},
  { path: 'search', component: LandHereComponent },
  {path: '*', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
