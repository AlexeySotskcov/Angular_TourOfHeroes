import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../mocks/mock-heroes';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {

  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    this.messageService.add('Received Date: ' + new Date());
    return of(HEROES);
  }
}
