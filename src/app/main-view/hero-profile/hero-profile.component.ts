import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { WebHeroesService } from 'src/app/services/web-heroes.service';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements OnInit {

  constructor(private webApi: WebHeroesService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  oneHero = [];

  ngOnInit(): void {
    this.getOneHero(this.data.heroid);
  }

  getOneHero(id: string) {
    this.webApi.getOneHero(id).subscribe((data) => {
      this.oneHero = data;
      console.log(this.oneHero);
    })
  }
}
