import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heros = [
      { id: 11, name: 'Batman'},
      { id: 12, name: 'Spiderman'},
      { id: 13, name: 'Flash'},
      { id: 14, name: 'HawkEye'},
      { id: 15, name: 'Hulk'},
      { id: 16, name: 'Thor'},
      { id: 17, name: 'Kkrish'},
      { id: 18, name: 'Shaktimaan'},
      { id: 19, name: 'Superman'},
      { id: 20, name: 'DeadPool'},
    ];
    return {heros};
  }
}
/**
 * Created by Lenovo on 4/11/2017.
 */
