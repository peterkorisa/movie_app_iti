import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Watchlistservice {

  private apiUrl = "http://localhost:3000";

  // Reactive watchlist state
  private _watchlist = new BehaviorSubject<any[]>([]);
  watchlist$ = this._watchlist.asObservable();

  constructor(
    private http: HttpClient
  ){
    this.getWatchlist();
  }

  getWatchlist() {
    
    this.http.get<any[]>(`${this.apiUrl}/watchlist`).subscribe({
      next: (data) => this._watchlist.next(data),
      error: (err) => console.error("Failed to fetch watchlist:", err)
    });
  }

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
    const current = this._watchlist.value;
    if (!current.find(m => m === movieId)) {
      this._watchlist.next([...current, movieId]);
    }
  }

  removeMovie(movieId: string) {
    const current = this._watchlist.value;
    this._watchlist.next(current.filter(m => m !== movieId));
  }

  isInWatchlist(movieId: string): boolean {
    console.log(movieId);
    console.log(this._watchlist.value.some(m => m == movieId));

    return this._watchlist.value.some(m => m == movieId);
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

    // console.log(this,this._watchlist.value);
  }

  // New method to update a movie's details in the watchlist
  updateMovie(updatedMovie: any) {
    const current = this._watchlist.value;
    const index = current.findIndex(m => m === updatedMovie.id);
    if (index !== -1) {
      // Create a shallow copy of the array and update the movie
      const newWatchlist = [...current];
      newWatchlist[index] = updatedMovie;
      this._watchlist.next(newWatchlist);
    }
  }
}
