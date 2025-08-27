import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Movie {
  
  private apiUrl = "http://localhost:3000";
  // private apiUrl2 = 'https://api.themoviedb.org/3';
  // private apiKey = 'c7767282ddfac5a3549796a15294a1b3'; 

  constructor(private http: HttpClient) {}

  // Now Playing movies
  getNowPlaying(page_number: string = "1"): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/page/${page_number}`);
    // return this.http.get<any>(`${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  // Search movies
  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/search/${query}`);
    // return this.http.get<any>(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=1`);
  }

  // Movie details
  getMovieDetails(id: string) {
    return this.http.get(`${this.apiUrl}/movie/${id}`);
    // return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  // Recommendations
  getRecommendations(id: string) {
    return this.http.get(`${this.apiUrl}/movie/recommendations/${id}`);
    // return this.http.get(`${this.apiUrl2}/movie/${id}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`);
  }
}
