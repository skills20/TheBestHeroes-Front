import { Component, OnInit } from '@angular/core';
import { WebHeroesService } from '../../services/web-heroes.service'

@Component({
  selector: 'app-best-hero',
  templateUrl: './best-hero.component.html',
  styleUrls: ['./best-hero.component.scss']
})
export class BestHeroComponent implements OnInit {

  bestHero: any;

  constructor(private webApi: WebHeroesService) { }

  ngOnInit(): void {
    this.getBestHero()
  }

  getBestHero() {
    this.webApi.getHero().subscribe((data) => {
      this.bestHero = data;
      console.log(this.bestHero);
    })
  }
}
