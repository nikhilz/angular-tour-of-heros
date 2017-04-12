import {Component} from "@angular/core";
/**
 * Created by Lenovo on 4/6/2017.
 */
@Component({
  selector: 'app-root',
  template: ` <h1>{{title}}</h1>
              <nav>
                  <a routerLink="/dashboard"
                  routerLinkActive="active">Dashboard</a>
              
                  <a routerLink="/heros"
                  routerLinkActive="active">Heros</a>
              </nav>
              <hr>
              <router-outlet></router-outlet>
              
 
  `,
  styleUrls: ['./app.component.css']



})
export class AppComponent{
  title = 'Tour of Heros';
}

