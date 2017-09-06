import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navBar.component';
import { HomePageComponent } from './components/homePage.component';
import { ExploreComponent } from './components/explore.component';
import { CardContentComponent } from './components/cardContent.component';

const appRoutes: Routes = [
  {
    path: 'homePage',
    component: HomePageComponent,
    data: { title: '首页' }
  },
  {
    path: 'explore',
    component: ExploreComponent,
    data: { title: '发现' }
  },
  {
    path: 'topic',
    component: HomePageComponent,
    data: { title: '话题' }
  },
  {
    path: 'notice',
    component: HomePageComponent
  },
  {
    path: 'message',
    component: HomePageComponent
  },
  {
    path: 'profile',
    component: HomePageComponent
  },
  {
    path: 'setting',
    component: HomePageComponent
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    CardContentComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
