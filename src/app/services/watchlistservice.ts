import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Watchlistservice {

  private watchlist: any[] = [];
  
  getWatchlist() {
    return this.watchlist;
  }

  addMovie(movie: any) {
    if (!this.watchlist.find(m => m.id === movie.id)) {
      this.watchlist.push(movie);
    }
  }

  removeMovie(movieId: number) {
    this.watchlist = this.watchlist.filter(m => m.id !== movieId);
  }

  isInWatchlist(movieId: number): boolean {
    return this.watchlist.some(m => m.id === movieId);
  }
}
