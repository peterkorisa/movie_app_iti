import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Watchlistservice {

  private apiUrl = "http://localhost:3000";

  // Reactive watchlist state
  private _watchlistIds = new BehaviorSubject<any[]>([]);
  watchlist$ = this._watchlistIds.asObservable();

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

  // async fetchWatchlistMovie(): Promise<any[]> {
  //   const ids = this._watchlistIds.value;
  //   console.log(ids);

  //   if (!ids.length) return [];

  //   try {
  //     const movies = await Promise.all(
  //       ids.map(id =>
  //         import('rxjs').then(rxjs =>
  //           rxjs.firstValueFrom(this.http.get<any>(`${this.apiUrl}/movie/card/${id}`))
  //         )
  //       )
  //     );
  //     this._watchlistIds.next(movies);
  //     return movies;
  //   } catch (err) {
  //     console.error("Failed to fetch watchlist details:", err);
  //     return [];
  //   }
  // }

  // getWatchlist() {
  //   const respond = this.http.get<any>(`${this.apiUrl}/watchlist`);
  //   respond.subscribe({
  //     next: (data: any) => {
        
  //       for(const id in data){
          
  //         const movie_respond = this.http.get<any>(`${this.apiUrl}/movie/card/${id}`);
  //         movie_respond.subscribe({
  //           next: (movieData: any) => {
        
  //             this.watchlist.push(movieData);
  //           }
  //         });
  //       }
  //     }
  //   });
  // }


  addMovie(movieId: string) {
    const current = this._watchlistIds.value;
    if (!current.find(m => m === movieId)) {
      this._watchlistIds.next([...current, movieId]);
    }
  }

  removeMovie(movieId: string) {
    const current = this._watchlistIds.value;
    this._watchlistIds.next(current.filter(m => m !== movieId));
  }

  isInWatchlist(movieId: string): boolean {
    console.log(movieId);
    console.log(this._watchlistIds.value.some(m => m == movieId));

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
