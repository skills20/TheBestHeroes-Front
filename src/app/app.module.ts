import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './main-view/main-nav/main-nav.component'
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BestHeroComponent } from './main-view/best-hero/best-hero.component';
import { AllHeroesComponent } from './main-view/all-heroes/all-heroes.component';
import { HeroProfileComponent } from './main-view/hero-profile/hero-profile.component';
import { WebHeroesService } from './services/web-heroes.service';
import { AlignmentsComponent } from './main-view/alignments/alignments.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BestHeroComponent,
    AllHeroesComponent,
    HeroProfileComponent,
    AlignmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  providers: [WebHeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
