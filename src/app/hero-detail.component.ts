/**
 * Created by Lenovo on 4/6/2017.
 */
import 'rxjs/add/operator/switchMap';

import {Component, Input, OnInit, style} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';




@Component({
  selector: 'hero-detail',
  templateUrl: './Hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css']

})

export class HeroDetailComponent implements OnInit{
   hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ){}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
