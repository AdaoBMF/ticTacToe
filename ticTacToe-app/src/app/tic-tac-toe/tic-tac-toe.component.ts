import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string = 'X';
  winner: string = ''
  board: string[][] = [
    ['','',''],
    ['','',''],
    ['','',''],
  ];

  processPlay(lin:number,col:number){
    if(this.board[lin][col] == '' && this.winner == ''){
      this.board[lin][col] = this.currentPlayer;
      if(this.checkWinner(this.currentPlayer)){
        this.winner = this.currentPlayer;
      }else{
        if(
          this.board[0][0] != '' && this.board[0][1] != '' && this.board[0][2] != '' &&
          this.board[1][0] != '' && this.board[1][1] != '' && this.board[1][2] != '' &&
          this.board[2][0] != '' && this.board[2][1] != '' && this.board[2][2] != ''){
          this.winner = 'Velha';
        }
      }
      if(this.currentPlayer== 'X'){
        this.currentPlayer = "O"
      }
      else{
        this.currentPlayer = 'X'
      }
    }

  }

  restart(){
    this.currentPlayer = 'X';
    this.winner = ''
    this.board = [
      ['','',''],
      ['','',''],
      ['','',''],
    ];    
  }

  checkWinner(player:string):boolean {
    for(let i=0; i < this.board.length; i++){
      if(this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player ){
        return true;
      }
    }
    for(let i=0; i < this.board.length; i++){
      if(this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player ){
        return true;
      }
    }
    if(this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player ){
      return true;
    }
    if(this.board[2][0] == player && this.board[1][1] == player && this.board[0][2] == player ){
      return true;
    }
    return false;   
  }

  constructor() { }
}
