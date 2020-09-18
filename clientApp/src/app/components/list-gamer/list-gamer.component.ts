import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/modules/game';
import { GameService } from '../../services/game.service'
@Component({
  selector: 'app-list-gamer',
  templateUrl: './list-gamer.component.html',
  styleUrls: ['./list-gamer.component.css']
})
export class ListGamerComponent implements OnInit {

  games : Game[];

  constructor(
    private GameService : GameService
  ) { }

  ngOnInit(){
    this.GameService.getAll().subscribe(
      res => {
        this.games = res;
      },err =>{
        console.log(err)
      }
    );
  }

}
