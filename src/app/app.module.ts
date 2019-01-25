import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeamComponent } from './team/team.component';
import { HomeSlideComponent } from './home-slide/home-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TeamComponent,
    HomeSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
