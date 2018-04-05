import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';
import { Subscriber } from 'rxjs/Subscriber';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [GameServiceService]
})
export class DetailsComponent implements OnInit {

  public currentChar = [];
  public detail :any[]=[]

  constructor(private _route: ActivatedRoute, private router: Router, public game: GameServiceService) {
    console.log("details constructor called")
    //this.detail = this.game.test( );
  }

  ngOnInit() {
    let myCharAlias = this._route.snapshot.paramMap.get('aliases');//getting aliases from route
    console.log(myCharAlias);
    console.log(this.detail);
    /* let currentChar = this.game.getCharSingle(myCharAlias).subscribe(
       data=>{
         currentChar=data;
         console.log(data);
         for(let x of currentChar){
           if(x.aliases == currentChar.aliases)
             return currentChar;
         }
         console.log("fd");
   }
     )*/
  }
  
  //this.detail =this.game.test(datay);

  
}
