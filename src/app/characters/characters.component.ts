import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [GameServiceService]
})
export class CharactersComponent implements OnInit {

  public chars: any[] = [];
  public chars2: any;

  constructor(public game: GameServiceService, public route1: ActivatedRoute, public router1: Router) { }

  ngOnInit() {
    console.log("char-comp called");

    //this.chars = this.game.getChar1();

    this.game.getChar1().subscribe(
      data => {
        this.chars = data;
        //this.router1.navigate(['/details']);
      },

      error => {
        console.log("error occured during home comp service call");
        console.log(error.erroMessage);
      }

    )
    //this.chars2 = this.game.getCharSingle(char)
  }

  test(datay: any) {
    console.log(datay);
    return datay;
  }

}
