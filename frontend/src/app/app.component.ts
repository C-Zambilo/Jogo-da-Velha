import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = "";
  player1 = "";
  emJogo = false;

  playerInserido() {
    console.log(this.player1);
  }

  iniciarJogo() {
    console.log("vamos começar");
    this.emJogo = true;
  }

  finalizarJogo() {
    this.emJogo = false;

  }
}
