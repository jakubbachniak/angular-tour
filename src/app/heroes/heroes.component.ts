import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  valueofInput: string;
  heroes: Hero[];

  constructor(private heroesService: HeroService) { }

  ngOnInit() {
      this.getHeroes();
  }

  // retrieve heroes from the service
  getHeroes(): void {
    this.heroesService.retrieveHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
