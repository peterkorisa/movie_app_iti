import { DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe } from '@angular/common'; 
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Watchlistservice } from '../../services/watchlistservice';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-movie-card',
  imports: [NgClass, DecimalPipe, FormsModule, DatePipe, RouterLink,NgStyle],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard  {
  @Input() movie: any;
  constructor(public watchlistService: Watchlistservice) {}
}
