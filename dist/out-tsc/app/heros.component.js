var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
export var HerosComponent = (function () {
    /* hero: Hero = {
        id: 1,
        name: 'Superman'
      };*/
    function HerosComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HerosComponent.prototype.getHeros = function () {
        var _this = this;
        this.heroService.getHeros().then(function (heros) { return _this.heros = heros; });
    };
    HerosComponent.prototype.ngOnInit = function () {
        this.getHeros();
    };
    HerosComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HerosComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HerosComponent = __decorate([
        Component({
            selector: 'my-heros',
            templateUrl: './heros.component.html',
            styleUrls: ['./heros.component.css'],
        }), 
        __metadata('design:paramtypes', [Router, HeroService])
    ], HerosComponent);
    return HerosComponent;
}());
//# sourceMappingURL=D:/ECLIPSE workspace/angular-tour-of-heros/src/app/heros.component.js.map