import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthHub } from './cards/auth-hub/auth-hub';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, AuthHub, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedCard: string | null = null;

  onCardSelected(cardName: string) {
    this.selectedCard = this.selectedCard === cardName ? null : cardName;
  }
}
