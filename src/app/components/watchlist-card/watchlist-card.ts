import { Component, NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';   
import { Watchlistservice } from '../../services/watchlistservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-watchlist-card',
  imports: [RouterLink,DatePipe],
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
