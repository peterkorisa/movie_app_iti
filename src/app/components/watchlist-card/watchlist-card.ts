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
  protected movies: any[] = [];

  constructor(public watchlistService: Watchlistservice) {
    // Subscribe to watchlist IDs
    this.watchlistService.watchlistIds$.subscribe(async ids => {
      if (!ids || !ids.length) {
        this.movies = [];
        return;
      }
      // Fetch movie details for each ID
      this.movies = await this.fetchMoviesForIds(ids);
    });
  }

  async fetchMoviesForIds(ids: any[]): Promise<any[]> {
    try {
      // Fetch all movie details in parallel using the service method
      const movies = await Promise.all(
        ids.map(id =>
          this.watchlistService.getMovieById(id).toPromise()
        )
      );
      console.log(movies);
      
      return movies;
    } catch (err) {
      console.error('Failed to fetch movie details:', err);
      return [];
    }
  }

  removeMovie(id: string){
    this.watchlistService.toggleWatchlist(id);
  }

  getStars(vote_average: number): boolean[] {
    const rating = Math.round(vote_average / 2);
    return Array(5).fill(false).map((_, i) => i < rating);
  }
}
