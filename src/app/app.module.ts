// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
// Services
import { DataService} from './services/data.service';
import { PaginateMakerService} from './services/paginate-maker.service';
// Components
import { AppComponent } from './app.component';
import { ReposComponent } from './components/repos/repos.component';
// Requests
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    DataService,
    PaginateMakerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

