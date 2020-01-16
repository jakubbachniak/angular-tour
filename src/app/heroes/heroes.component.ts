import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  valueofInput: string;
  heroes = HEROES;
  selectedHero: Hero;


  constructor() { }

  ngOnInit() {
  }

  // handle li element click event
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  // handle click event of the button in the heroes page.
  // on click pass the value of the input box to the component
  // and place it in the class' valueOfInput field

  callPhone(phoneNumber: string) {
    this.valueofInput = phoneNumber;
  }

  // after receiving the value from the button click
  // this function is called from the template to retrieve the value of the input.
  getPhoneNumber() {
    return ( this.valueofInput == null ? 'no number provided' : this.valueofInput );
  }

}
