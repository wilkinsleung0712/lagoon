/**
 * Created by weiqiangliang on 9/4/17.
 */
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {PhotoDetailComponent} from './photo.detail.component';
import {MyAlbumComponent} from './my.album.component';


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'MyAlbum', component: MyAlbumComponent},
  {path: 'Photo/:photoId', component: PhotoDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
