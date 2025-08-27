import { Component } from '@angular/core';
import { Movie } from '../../services/movie';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieCard } from '../movie-card/movie-card';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-movielist',
  imports: [RouterLink, MovieCard, FormsModule],
  templateUrl: './movielist.html',
  styleUrl: './movielist.css',
})
export class Movielist {
  page_number: string = "1";
  movies: any[] = [];
  query = '';

  constructor(
    private movieService: Movie,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('page_number');
      this.page_number = id || "1";
    });

    console.log(this.page_number);
    this.movieService.getNowPlaying(this.page_number).subscribe((res: any) => {
      this.movies = res.results;
    });
  }
}
