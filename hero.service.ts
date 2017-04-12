import {Injectable} from "@angular/core";
import {Hero} from "./hero";
import 'rxjs/add/operator/toPromise';
import {Http, Headers} from "@angular/http";
/**
 * Created by Lenovo on 4/6/2017.
 */

@Injectable()
export  class HeroService {

  private herosUrl = 'api/heros';  // URL to web api

  constructor(private http: Http) { }


  getHeros(): Promise<Hero[]> {
    return this.http.get(this.herosUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



// See the "Take it slow" appendix
getHerosSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeros()), 2000);
  });
}

  getHero(id: number): Promise<Hero> {
    const url = `${this.herosUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(hero: Hero): Promise<Hero> {
    const url = `${this.herosUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.herosUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.herosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


}

