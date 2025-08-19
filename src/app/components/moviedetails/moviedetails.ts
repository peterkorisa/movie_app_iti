import { Component, Input } from '@angular/core';
import { Movie } from '../../services/movie';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-moviedetails',
  imports: [DatePipe,NgClass,UpperCasePipe,RouterLink],
  templateUrl: './moviedetails.html',
  styleUrl: './moviedetails.css'
})
export class Moviedetails {
  
  movie: any;
  recommendations: any[] = [];
  stars: boolean[] = [];
  @Input() id!: string;
  
  constructor(
    private route: ActivatedRoute,
    private movieService: Movie
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadMovie(id);
      }
    });
  }
  
  loadMovie(id: string) {
    this.movieService.getMovieDetails(id).subscribe(data => {
      this.movie = data;
      const rating = Math.round(this.movie.vote_average / 2);
      this.stars = Array(5).fill(false).map((_, i) => i < rating);
    });

    this.movieService.getRecommendations(id).subscribe((data:any) => {
      this.recommendations = data.results; 
    });
  }
}
