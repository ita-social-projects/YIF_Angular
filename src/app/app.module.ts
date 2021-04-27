import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LoginComponent } from './header/login/login.component';
import { LectorCabinetComponent } from './lector-cabinet/lector-cabinet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    LoginComponent,
    LectorCabinetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
