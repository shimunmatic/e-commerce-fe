import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ShowcaseComponent } from './showcase/showcase.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchResultComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'showcase',
    component: ShowcaseComponent,
  }/*,
  {
    path: '**',
    redirectTo: 'home'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
