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
import {PhotoDataService} from 'data/in-memory-data.service';
import {PhotoService} from './services/photo.service';
import {UserService} from './services/user.service';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {PhotoDetailComponent} from './photo.detail.component';
import {LoginFormDirectiveComponent} from './directives/login.form.directive';
import {RegisterFormDirectiveComponent} from './directives/register.form.directive';
import {AddPhotoComponent} from './directives/add.photo.component';
import {MyAlbumComponent} from './my.album.component';
import {ImageCommentsComponent} from './image.comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPhotoComponent,
    PhotoListComponent,
    PhotoDetailComponent,
    SidePanelComponent,
    NavBarComponent,
    RegisterComponent,
    RegisterFormDirectiveComponent,
    LoginComponent,
    LoginFormDirectiveComponent,
    MyAlbumComponent,
    ImageCommentsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    // InMemoryWebApiModule.forRoot(PhotoDataService)
  ],
  providers: [
    PhotoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
