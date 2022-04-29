import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AlertErrorComponent } from './components/shared/alert-error/alert-error.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from 'src/material/material.module';
import { BodyComponent } from './components/layout/body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';


const firebaseConfig = {
  apiKey: "AIzaSyDNZf2GIcfUoO1rUiPd2yn6D92ttjAxnhA",
  authDomain: "tpsaladejuegos-e4f04.firebaseapp.com",
  projectId: "tpsaladejuegos-e4f04",
  storageBucket: "tpsaladejuegos-e4f04.appspot.com",
  messagingSenderId: "450618904326",
  appId: "1:450618904326:web:80a1e8678014dc47cc1887"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    AlertErrorComponent,
    SidebarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
