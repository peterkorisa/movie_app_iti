import { Component } from '@angular/core';
import { Movie } from '../../services/movie';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieCard } from '../movie-card/movie-card';
import { FormsModule} from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-movielist',
  imports: [RouterLink, MovieCard, FormsModule,PaginationModule],
  templateUrl: './movielist.html',
  styleUrl: './movielist.css',
})
export class Movielist {

  movies: any[] = [];
  query = '';

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
    this.route.paramMap.subscribe(params => {
      const id = params.get('page_number');
      this.page = id ? +id : 1; 
      this.loadMovies();           
    });
  }

  loadMovies() {
    this.movieService.getNowPlaying(this.page.toString()).subscribe((res: any) => {
      this.movies = res.results;
      this.totalPages = res.total_pages; 
    });
  }

  onPageChange(newPage: number) {
    this.router.navigate(['/movielist', newPage]);
  }

}
