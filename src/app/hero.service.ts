import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './heroes/hero';
import {Observable, of} from 'rxjs';

@Injectable({
  // provide the service by makinng the resource injectable
  providedIn: 'root',
})
export class HeroService {

  tempHero: Hero;

  constructor() { }

  // add method to return the mock heroes
  retrieveHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
