import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  
  heroes = HEROES

  heroXXX: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
