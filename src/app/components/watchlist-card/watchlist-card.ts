import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ add this
import { FormsModule } from '@angular/forms'; // ✅ add this for ngModel
import { Watchlistservice } from '../../services/watchlistservice';

@Component({
  selector: 'app-watchlist-card',
  imports: [CommonModule],
  templateUrl: './watchlist-card.html',
  styleUrl: './watchlist-card.css'
})
export class WatchlistCard {
  
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
  
  constructor(private watchlistService: Watchlistservice) {}

  get watchlist() {
    return this.watchlistService.getWatchlist();
  }

  removeMovie(id: number) {
    this.watchlistService.removeMovie(id);
  }
}
