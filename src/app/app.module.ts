import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from './material/material.module';
import { FormspreeComponent } from './formspree/formspree.component';
import { PoiComponent } from './poi/poi.component';
import { AccountComponent } from './account/account.component';
import { UpdAccModalComponent } from './modals/upd-acc-modal/upd-acc-modal.component';
import { DelAccModalComponent } from './modals/del-acc-modal/del-acc-modal.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    FormspreeComponent,
    PoiComponent,
    AccountComponent,
    UpdAccModalComponent,
    DelAccModalComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdAccModalComponent, DelAccModalComponent]
})
export class AppModule { }
