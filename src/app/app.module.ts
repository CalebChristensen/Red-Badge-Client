import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AdminDelModalComponent } from './modals/admin-del-modal/admin-del-modal.component';
import { PoiModalComponent } from './modals/poi-modal/poi-modal.component';
import { RestModalComponent } from './modals/rest-modal/rest-modal.component';
import { TourModalComponent } from './modals/tour-modal/tour-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    FormspreeComponent,
    PoiComponent,
    AccountComponent,
    UpdAccModalComponent,
    DelAccModalComponent,
    AdminComponent,
    AdminDelModalComponent,
    PoiModalComponent,
    RestModalComponent,
    TourModalComponent

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
  entryComponents: [UpdAccModalComponent, DelAccModalComponent, AdminDelModalComponent, PoiModalComponent, TourModalComponent, RestModalComponent ]
})
export class AppModule { }
