import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ add this
import { FormsModule } from '@angular/forms'; // ✅ add this for ngModel

@Component({
  selector: 'app-watchlist-card',
  imports: [CommonModule],
  templateUrl: './watchlist-card.html',
  styleUrl: './watchlist-card.css'
})
export class WatchlistCard {

}
