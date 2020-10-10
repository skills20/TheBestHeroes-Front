import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-view/main-nav/main-nav.component';
import { BestHeroComponent } from './main-view/best-hero/best-hero.component'


const routes: Routes = [
  {
    path: '',
    component: BestHeroComponent
  },
  {
    path: 'theBestHero',
    component: BestHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
