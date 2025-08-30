import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class Watchlistservice {

  private apiUrl = "http://localhost:3000";

  // Reactive watchlist state
  private _watchlistIds = new BehaviorSubject<any[]>([]);
  watchlistIds$ = this._watchlistIds.asObservable();

  constructor(
    private http: HttpClient
  ){
    this.getWatchlistIds();
  }


  getMovieById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/movie/card/${id}`);
  }


  getWatchlistIds() {
    this.http.get<any[]>(`${this.apiUrl}/watchlist`).subscribe({
      next: (data) => this._watchlistIds.next(data),
      error: (err) => console.error("Failed to fetch watchlist:", err)
    });
  }


  addMovie(movieId: string) {

    movieId = String(movieId);
    const current = this._watchlistIds.value;

    if (!current.find(m => m === movieId)) {
      this._watchlistIds.next([...current, movieId]);
    }
  }
  

  removeMovie(movieId: string) {
    movieId = String(movieId);
    const current = this._watchlistIds.value;
    
    if (current.includes(movieId)) {
      this._watchlistIds.next(current.filter(m => m !== movieId));
    }
  }


  isInWatchlist(movieId: string): boolean {
    
    movieId = String(movieId);

    return this._watchlistIds.value.some(m => m == movieId);
  }
  
  
  toggleWatchlist(movieId: string) {
    
    this.http.get<any>(`${this.apiUrl}/watchlist/toggle/${movieId}`).subscribe({
      next: (data) => {
        if (data.movie_in_list == 1) {
          // Add (you might fetch details here instead of just pushing id)
          this.addMovie(movieId);
        } 
        else {
          this.removeMovie(movieId);
        }
      }
    });

    // console.log(this,this._watchlistIds.value);
  }

  // New method to update a movie's details in the watchlist
  updateMovie(updatedMovie: any) {
    const current = this._watchlistIds.value;
    const index = current.findIndex(m => m === updatedMovie.id);
    if (index !== -1) {
      // Create a shallow copy of the array and update the movie
      const newWatchlist = [...current];
      newWatchlist[index] = updatedMovie;
      this._watchlistIds.next(newWatchlist);
    }
  }
}
