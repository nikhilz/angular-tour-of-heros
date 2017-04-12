import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from './hero.service';

import { Router } from '@angular/router';



@Component({
  selector: 'my-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],


})



export class HerosComponent implements OnInit{


  //hero = 'Superman' ;
  selectedHero: Hero;
  heros :  Hero[];


/* hero: Hero = {
    id: 1,
    name: 'Superman'
  };*/

  constructor(
    private router: Router,
    private heroService: HeroService) {

  }

  getHeros():void{
    this.heroService.getHeros().then(heros => this.heros = heros);

  }

  ngOnInit(): void {
    this.getHeros();
  }


  onSelect(hero: Hero): void{
    this.selectedHero= hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

