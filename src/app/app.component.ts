import { Component } from '@angular/core';
import { WebHeroesService } from '../app/services/web-heroes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WebHeroesService]
})
export class AppComponent {
  title = 'theBestHeroes';
}
