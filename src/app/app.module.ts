import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TablesComponent } from './tables/tables.component';
import { App5Component } from './app5/app5.component';
import { SortDirective } from './directive/sort.directive';
import { App6Component } from './app6/app6.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TimestampComponent } from './timestamp/timestamp.component';
import { FormsModule } from '@angular/forms';
import { App4Component } from './app4/app4.component';
import { TimerServiceBasedComponent } from './timer-service-based/timer-service-based.component';
import { DataService } from './data.service';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'app1', component: App1Component },
  {path: 'app2', component: App2Component },
  {path: 'app3', component: App3Component },
  {path: 'app4', component: App4Component },
  {path: 'app5', component: App5Component },
  {path: 'app6', component: App6Component },
];

@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    App2Component,
    App3Component,
    HomePageComponent,
    TimerDisplayComponent,
    TablesComponent,
    App5Component,
    SortDirective,
    App6Component,
    TimestampComponent,
    App4Component,
    TimerServiceBasedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
