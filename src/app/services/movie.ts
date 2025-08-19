import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Movie {
  
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'c7767282ddfac5a3549796a15294a1b3'; 

  constructor(private http: HttpClient) {}

  // Now Playing movies
  getNowPlaying(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`);
  }

  // Search movies
  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=1`);
  }



  // Movie details
getMovieDetails(id: string) {
  return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`);
}

// Recommendations
getRecommendations(id: string) {
  return this.http.get(`${this.apiUrl}/movie/${id}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`);
}
}
