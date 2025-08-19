import { Component } from '@angular/core';
import { Movie } from '../../services/movie';
import { RouterLink } from '@angular/router';
import { MovieCard } from '../movie-card/movie-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movielist',
  imports: [RouterLink,MovieCard,FormsModule],
  templateUrl: './movielist.html',
  styleUrl: './movielist.css'
})
export class Movielist {
 movies: any[] = [];
  query = '';

  constructor(private movieService: Movie) {}
  
  ngOnInit(): void {
    this.movieService.getNowPlaying().subscribe((res: any) => {
      this.movies = res.results;
    });
  }
}
