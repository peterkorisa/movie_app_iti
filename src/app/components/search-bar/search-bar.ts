import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../services/movie';
import { MovieCard } from '../movie-card/movie-card';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule,MovieCard],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  
  movies: any[] = [];
  query: string = '';
  searchedQuery: string = '';

  constructor(private movieService: Movie,private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get query from route parameter
    this.route.params.subscribe(params => {
      if (params['query']) {
        this.query = params['query'];
        this.searchMovies();
        this.searchedQuery = this.query;   
      } 
    });
  }

  searchMovies(): void {
    if (this.query && this.query.trim().length > 0) {
      this.movieService.searchMovies(this.query).subscribe({
        next: (data: any) => {
          this.movies = data.results || [];
        }
      });
    }
  }

  onSubmit(): void {
    if (this.query && this.query.trim().length > 0) {
      this.searchedQuery = this.query;   
      this.searchMovies();
    }
  }


}
