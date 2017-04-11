import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {PhotoListComponent} from './photo.list.component';
import {SidePanelComponent} from './side.panel.component';
import {AppRoutingModule} from './app.routering.module';
import {NavBarComponent} from './nav.bar.component';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TestData} from 'data/in-memory-data.service';
import {PhotoService} from './services/photo.service';
import {UserService} from './services/user.service';
import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';
import {PhotoDetailComponent} from './photo.detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    PhotoDetailComponent,
    SidePanelComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [
    PhotoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
