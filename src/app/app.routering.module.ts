/**
 * Created by weiqiangliang on 9/4/17.
 */
import {RouterModule,Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";


const routes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
