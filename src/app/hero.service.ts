import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  // provide the service by makinng the resource injectable
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // add method to return the mock heroes
  retrieveHeroes(): Observable<Hero[]> {
    // TODO: send message after fetching new data from HEROES
    this.messageService.add('Hero service: fetched heroes.');
    return of(HEROES);
  }
}
