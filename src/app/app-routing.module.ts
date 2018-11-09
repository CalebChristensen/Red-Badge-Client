import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'; 
import { PoiComponent } from './poi/poi.component';
import { AccountComponent } from './account/account.component';
import { FormspreeComponent } from './formspree/formspree.component';
import { AuthGuard } from './services/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './services/admin.guard'

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'poi', component: PoiComponent},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'formspree', component: FormspreeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
