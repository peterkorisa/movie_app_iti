import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../services/movie';
import { MovieCard } from '../movie-card/movie-card';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule,MovieCard,RouterLink],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  
 movies: any[] = [];
 query: string = '';
 isLoading: boolean = false;
 hasSearched: boolean = false;
 private searchTimeout: any;

  constructor(
    private movieService: Movie,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get query from route parameter
    this.route.params.subscribe(params => {
      if (params['query']) {
        this.query = params['query'];
        this.searchMovies();
      } else {
        this.loadNowPlaying();
      }
    });
  }

  searchMovies(): void {
    if (this.query && this.query.trim().length > 0) {
      this.isLoading = true;
      this.hasSearched = true;
      this.movieService.searchMovies(this.query).subscribe({
        next: (data: any) => {
          this.movies = data.results || [];
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Search error:', error);
          this.movies = [];
          this.isLoading = false;
        }
      });
    }
  }

  loadNowPlaying(): void {
    this.isLoading = true;
    this.hasSearched = false;
    this.movieService.getNowPlaying().subscribe({
      next: (data: any) => {
        this.movies = data.results || [];
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Now playing error:', error);
        this.movies = [];
        this.isLoading = false;
      }
    });
  }


searchedQuery: string = '';   // <-- new variable

onSubmit(): void {
  if (this.query && this.query.trim().length > 0) {
    this.searchedQuery = this.query;   // lock in the searched term
    this.searchMovies();
    this.hasSearched = true;
  }
}


}
