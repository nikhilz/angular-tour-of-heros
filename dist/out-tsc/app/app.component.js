var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
/**
 * Created by Lenovo on 4/6/2017.
 */
export var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heros';
    }
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            template: " <h1>{{title}}</h1>\n              <nav>\n                  <a routerLink=\"/dashboard\"\n                  routerLinkActive=\"active\">Dashboard</a>\n              \n                  <a routerLink=\"/heros\"\n                  routerLinkActive=\"active\">Heros</a>\n              </nav>\n              <hr>\n              <router-outlet></router-outlet>\n              \n \n  ",
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/ECLIPSE workspace/angular-tour-of-heros/src/app/app.component.js.map