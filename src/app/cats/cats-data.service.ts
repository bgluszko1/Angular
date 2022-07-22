import { Cat } from './model';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsDataService {

  private readonly allCats: Cat[] = [
    {
      name: 'Puszek',
      ageMonths: 8,
      breed: 'maine coon',
      isVaccinated: false,
      picUrl: ['puszek1.jpg'],
      fact: "Lubi jeść",
      isAdopted: false
    },
    {
      name: 'Mruczek',
      ageMonths: 36,
      breed: 'brytyjczyk',
      isVaccinated: true,
      picUrl: ['mruczek1.jpg'],
      fact: "Jest leniwy",
      isAdopted: false
    },
    {
      name: 'Kiciek',
      ageMonths: 52,
      breed: 'perski',
      isVaccinated: true,
      picUrl: ['kiciek.jpg','kiciek2.jpg','kiciek3.jpg'],
      fact: "Kocha zwierzątka",
      isAdopted: false
    },
    {
      name: 'Kłaczek',
      ageMonths: 81,
      breed: 'brytyjczyk',
      isVaccinated: false,
      picUrl: ['klaczek.jpg','klaczek2.jpg','klaczek3.jpg'],
      fact: "Jest niezdarny",
      isAdopted: false
    },
    {
      name: 'Pimpuś',
      ageMonths: 6,
      breed: 'dachowiec',
      isVaccinated: true,
      picUrl: ['pimpus.jpg'],
      fact: "Łapie myszy",
      isAdopted: false
    }
  ];


  getCatsData(): Observable<Cat[]> {
    return of(this.allCats);
  }

  getCat(name: string): Observable<Cat > {
    return of(this.allCats.find(c => c.name === name)!);
  }
}
