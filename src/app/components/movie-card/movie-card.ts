import { DatePipe, DecimalPipe, NgClass, PercentPipe } from '@angular/common'; 
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Watchlistservice } from '../../services/watchlistservice';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-movie-card',
  imports: [NgClass ,DecimalPipe ,FormsModule,DatePipe,RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard  {
   @Input() movie: any;
  
  imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private watchlistService: Watchlistservice) {}
  
  toggleWatchlist(movie: any) {
    if (this.watchlistService.isInWatchlist(movie.id)) {
      this.watchlistService.removeMovie(movie.id);
    } else {
      this.watchlistService.addMovie(movie);
    }
  }

  isInWatchlist(movieId: number) {
    return this.watchlistService.isInWatchlist(movieId);
  }
}
