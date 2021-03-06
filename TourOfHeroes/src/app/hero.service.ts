import { Injectable } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './mocks/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched heroes');
    return of(HEROES);
  }
}
