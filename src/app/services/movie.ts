import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Movie {
  
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  // Now Playing movies
  getNowPlaying(page_number: string = "1"): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/page/${page_number}`);
  }

  // Search movies
  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/search/${query}?page=${page}`);
  }  

  // Movie details
  getMovieDetails(id: string) {
    return this.http.get(`${this.apiUrl}/movie/${id}`);
  }

  // Recommendations
  getRecommendations(id: string) {
    return this.http.get(`${this.apiUrl}/movie/recommendations/${id}`);
  }
}
