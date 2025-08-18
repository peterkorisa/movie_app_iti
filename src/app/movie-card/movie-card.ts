import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DecimalPipe } from '@angular/common'; 
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [NgFor , DecimalPipe ,NgFor ,FormsModule],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard implements OnInit {
  movies: any[] = [];
  filteredMovies: any[] = [];
  searchTerm: string = '';

  private apiUrl =
    'https://api.themoviedb.org/3/discover/movie?api_key=43a36acaf39ddefff867563e1123df7c&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.http.get<any>(this.apiUrl).subscribe((response) => {
      this.movies = response.results;
      this.filteredMovies = [...this.movies]; // ✅ initialize with all movies
    });
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredMovies = this.movies.filter((movie) =>
      (movie.title || movie.name).toLowerCase().includes(term)
    );
  }
}
