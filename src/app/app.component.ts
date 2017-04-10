import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero/hero.service';
import { Hero } from './hero/hero';

@Component({
  providers: [
    HeroService
  ],
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    '/styles.css'
  ]
})

export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}