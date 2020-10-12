import { Component, OnInit } from '@angular/core';
import { WebHeroesService } from '../../services/web-heroes.service'

export interface Heroes {
  id: number;
  name: string;
  photo: string;
  Profile: string;
}

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.scss']
})
export class AllHeroesComponent implements OnInit {

  allHeroes = [];
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'photo', 'profile'];


  constructor(private webApi: WebHeroesService) { }

  ngOnInit(): void {
    this.getAllHeroes();
  }

  getAllHeroes() {
    this.webApi.getHeroes().subscribe((data) => {
      this.allHeroes = data;
      this.dataSource = this.allHeroes;
      console.log(this.allHeroes)
    })
  }
}
