import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WebHeroesService } from 'src/app/services/web-heroes.service';


@Component({
  selector: 'app-alignments',
  templateUrl: './alignments.component.html',
  styleUrls: ['./alignments.component.scss']
})
export class AlignmentsComponent implements OnInit {
  characters: any;
  heroes: any;
  badGuys = [];
  goodGuys = [];

  constructor(private webApi: WebHeroesService) { }

  ngOnInit(): void {
  }

  getAlignment(align: string) {
    this.heroes = align;
    this.webApi.getAlignment(align).subscribe((data) => {
      data.forEach(element => {
        if (element[3] == "good") {
          this.goodGuys.push(element);
        }
        else if ((element[3] == "bad")) {
          this.badGuys.push(element);
        }
      });
      this.characters = data[0][3];
      console.log(this.characters);
    })
  }
}
