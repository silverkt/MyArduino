import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service';

import { Router } from '@angular/router';

import { OnInit } from '@angular/core';

 


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
           
})
export class HeroesComponent implements OnInit {
  title: string = 'Tour of heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService, private router: Router) { }
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroesSlowly().then((heroes: Hero[]) => this.heroes = heroes);
  }
  ngOnInit(){
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
