import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
      this.dataSource = this.allHeroes.slice(0, 5);
      console.log(this.allHeroes);
    })
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.allHeroes.length) {
      endIndex = this.allHeroes.length;
    }
    this.dataSource = this.allHeroes.slice(startIndex, endIndex);
    console.log(this.dataSource);
  }
}
