import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Watchlistservice {
  private watchlist: any[] = [];
  constructor() {
    const saved = localStorage.getItem('watchlist');
    this.watchlist = saved ? JSON.parse(saved) : [];
  }
  private saveToLocalStorage() {
    localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
  }
  getWatchlist() {
    return this.watchlist;
  }

  addMovie(movie: any) {
    if (!this.watchlist.find((m) => m.id === movie.id)) {
      this.watchlist.push(movie);
      this.saveToLocalStorage();
    }
  }

  removeMovie(movieId: number) {
    this.watchlist = this.watchlist.filter((m) => m.id !== movieId);
    this.saveToLocalStorage();
  }

  isInWatchlist(movieId: number): boolean {
    return this.watchlist.some((m) => m.id === movieId);
  }

  toggleWatchlist(movie: any) {
    if (this.isInWatchlist(movie.id)) {
      this.removeMovie(movie.id);
    } else {
      this.addMovie(movie);
    }
  }
}
