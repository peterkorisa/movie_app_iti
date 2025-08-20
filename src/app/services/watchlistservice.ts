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
  
   toggleWatchlist(movie: any) {
    if (this.isInWatchlist(movie.id)) {
      this.removeMovie(movie.id);
    } else {
      this.addMovie(movie);
    }
  }

  // New method to update a movie's details in the watchlist
   updateMovie(updatedMovie: any) {
    const index = this.watchlist.findIndex(m => m.id === updatedMovie.id);
    if (index !== -1) {
      // Create a shallow copy of the array and update the movie
      const newWatchlist = [...this.watchlist];
      newWatchlist[index] = updatedMovie;
      this.watchlist = newWatchlist;
    }
  }
}
