import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'; 
import { PoiComponent } from './poi/poi.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TripsComponent } from './trips/trips.component';
import { AccountComponent } from './account/account.component';
import { FormspreeComponent } from './formspree/formspree.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'poi', component: PoiComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'trips', component: TripsComponent},
  {path: 'account', component: AccountComponent},
  {path: 'formspree', component: FormspreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
