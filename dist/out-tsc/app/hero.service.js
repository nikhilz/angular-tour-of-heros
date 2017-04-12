var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Http } from "@angular/http";
/**
 * Created by Lenovo on 4/6/2017.
 */
export var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.herosUrl = 'api/heros'; // URL to web api
    }
    HeroService.prototype.getHeros = function () {
        return this.http.get(this.herosUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    // See the "Take it slow" appendix
    HeroService.prototype.getHerosSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeros()); }, 2000);
        });
    };
    HeroService.prototype.getHero = function (id) {
        var url = this.herosUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], HeroService);
    return HeroService;
}());
//# sourceMappingURL=D:/ECLIPSE workspace/angular-tour-of-heros/src/app/hero.service.js.map