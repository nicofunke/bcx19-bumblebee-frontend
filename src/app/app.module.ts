import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendationViewComponent } from './Views/recommendation-view/recommendation-view.component';
import { HomeViewComponent } from './Views/home-view/home-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { RecommendationMapComponent } from './Components/recommendation-map/recommendation-map.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FeedbackViewComponent } from './Views/feedback-view/feedback-view.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DroneCountdownComponent } from './Components/drone-countdown/drone-countdown.component';
import { CountdownModule } from 'ngx-countdown';
import { DetailViewComponent } from './Views/detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationViewComponent,
    HomeViewComponent,
    RecommendationMapComponent,
    NavBarComponent,
    FeedbackViewComponent,
    DroneCountdownComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // TODO: Add Google Maps API key
      apiKey: 'GOOGLE MAPS API KEY'   
    }),
    NgbModule,
    // TODO: Reactivate NGSW for production
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
