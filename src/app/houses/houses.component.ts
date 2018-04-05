import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';
import { Subscriber } from 'rxjs/Subscriber';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  providers: [GameServiceService]
})
export class HousesComponent implements OnInit {

  public houses: any[] = [];
  public houses2: any;

  constructor(public game: GameServiceService) { }

  ngOnInit() {
    this.game.getHouse1().subscribe(
      data => {
        this.houses = data;
      })
  }
  test(datay: any) {
    console.log(datay);
    return datay;
  }
}