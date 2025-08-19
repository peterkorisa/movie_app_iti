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


  

onQueryChange(): void {
  // Clear previous search timeout
  if (this.searchTimeout) {
    clearTimeout(this.searchTimeout);
  }

  // Debounced search with 800ms delay
  this.searchTimeout = setTimeout(() => {
    if (this.query.trim().length > 2) {
      this.searchMovies();
    } else if (this.query.trim().length === 0) {
      this.loadNowPlaying();
    }
  }, 800);
}
}
