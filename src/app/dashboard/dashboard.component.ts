import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  // create container for heroes
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  // method to import heroes
  getHeroes(): void {
    this.heroService.retrieveHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
