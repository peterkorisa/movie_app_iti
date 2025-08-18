import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { SearchBar } from './search-bar/search-bar';

import { WatchlistCard } from './watchlist-card/watchlist-card';
import { NoWatchlist } from './no-watchlist/no-watchlist';
import { HttpClientModule } from '@angular/common/http';
import { MovieCard } from './movie-card/movie-card';

@Component({
  selector: 'app-root',
  imports: [ Navbar   ,HttpClientModule ,MovieCard ,WatchlistCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie_app');
}
