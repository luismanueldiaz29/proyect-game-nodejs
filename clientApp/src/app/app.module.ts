import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddGamerComponent } from './components/add-gamer/add-gamer.component';
import { ListGamerComponent } from './components/list-gamer/list-gamer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    AddGamerComponent,
    ListGamerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
