import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestHeroComponent } from './main-view/best-hero/best-hero.component';
import { AllHeroesComponent } from './main-view/all-heroes/all-heroes.component';
import { AlignmentsComponent } from './main-view/alignments/alignments.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/theBestHero',
    pathMatch: 'full'
  },
  {
    path: 'theBestHero',
    component: BestHeroComponent
  },
  {
    path: 'allHeroes',
    component: AllHeroesComponent
  },
  {
    path: 'alignments',
    component: AlignmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
