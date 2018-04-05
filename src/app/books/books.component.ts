import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../game-service.service';
import { Subscriber } from 'rxjs/Subscriber';

//import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [GameServiceService]
  //providers array can be added here to add the service
})
export class BooksComponent implements OnInit {

  public books = [];
  public bookHttp = [];

  constructor(public game: GameServiceService) {
    console.log("books comp called")
  }

  ngOnInit() {
    console.log("home-comp called");

    this.books = this.game.getBook();

    this.bookHttp = this.game.getBook1().subscribe(
      data => {
        this.bookHttp = data;
      },

      error => {
        console.log("error occured during home comp service call");
        console.log(error.erroMessage);
      }
    )
  }

  test(datay: any) {
    console.log(datay);
    return datay;
  }
}