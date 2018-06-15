/**
 * Created by Michael M. Simon on 6/12/2018.
 */
import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {ReposComponent} from './components/repos/repos.component';

const appRoutes: Routes = [
  // Default home page
  {
    path: '',
    component: ReposComponent
  }
  ];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
