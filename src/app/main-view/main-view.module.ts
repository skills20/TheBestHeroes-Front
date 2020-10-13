import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BestHeroComponent } from './best-hero/best-hero.component';
import { MatCardModule } from '@angular/material/card';
import { WebHeroesService } from '../services/web-heroes.service';
import { AllHeroesComponent } from './all-heroes/all-heroes.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AlignmentsComponent } from './alignments/alignments.component';

@NgModule({
  declarations: [MainNavComponent, BestHeroComponent, AllHeroesComponent, HeroProfileComponent, AlignmentsComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialog
  ],
  providers: [WebHeroesService]
})
export class MainViewModule { }
