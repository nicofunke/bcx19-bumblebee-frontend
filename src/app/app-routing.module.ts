import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationViewComponent } from './Views/recommendation-view/recommendation-view.component';
import { HomeViewComponent } from './Views/home-view/home-view.component';
import { FeedbackViewComponent } from './Views/feedback-view/feedback-view.component';
import { DetailViewComponent } from './Views/detail-view/detail-view.component';

const routes: Routes = [
  { path: 'recommendation', component: RecommendationViewComponent },
  { path: 'feedback', component: FeedbackViewComponent},
  { path: 'details', component: DetailViewComponent},
  { path: '**', component: HomeViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
