import { Component } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';   
import { Watchlistservice } from '../../services/watchlistservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-watchlist-card',
  imports: [RouterLink,DatePipe,NgClass],
  templateUrl: './watchlist-card.html',
  styleUrl: './watchlist-card.css'
})
export class WatchlistCard {
  
  constructor(public watchlistService: Watchlistservice) {}

  getStars(vote_average: number): boolean[] {
    const rating = Math.round(vote_average / 2);
    return Array(5).fill(false).map((_, i) => i < rating);
  }

}
