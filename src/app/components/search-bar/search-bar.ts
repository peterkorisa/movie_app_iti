import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../services/movie';
import { MovieCard } from '../movie-card/movie-card';
import { ActivatedRoute, Router} from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule,MovieCard,PaginationModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  
  movies: any[] = [];
  query: string = '';
  searchedQuery: string = '';

    // Pagination
  page = 1;                
  pageSize = 20;           
  totalPages = 0;

  constructor(
    private movieService: Movie,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query'];
      this.page = params['page'] ? +params['page'] : 1;
      this.searchedQuery = this.query;
      this.searchMovies(this.page);
    });
}

  searchMovies(page: number = 1): void {
    if (this.query && this.query.trim().length > 0) {
      this.movieService.searchMovies(this.query, page).subscribe({
        next: (data: any) => {
          this.movies = data.results || [];
          this.totalPages = data.total_pages || 0; 
          this.page = page; 
        }
      });
    }
}

  onPageChange(newPage: number) {
    this.router.navigate(['/search', this.query, newPage]);
  }

  onSubmit(): void {
    if (this.query && this.query.trim().length > 0) {
      this.searchedQuery = this.query;   
      this.searchMovies();
    }
  }

}
