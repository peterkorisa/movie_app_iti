import { Routes } from '@angular/router';
import { MovieCard } from './components/movie-card/movie-card';
import { WatchlistCard } from './components/watchlist-card/watchlist-card';
import { Moviedetails } from './components/moviedetails/moviedetails';
import { SearchBar } from './components/search-bar/search-bar';
import { Movielist } from './components/movielist/movielist';

export const routes: Routes = [
  { path: 'movielist', component: Movielist },
  { path: '', redirectTo: 'movielist', pathMatch: 'full' },
  { path: 'search/:query', component: SearchBar },
  { path: 'watchlist', component: WatchlistCard },
  { path: 'movie/:id', component: Moviedetails },
  { path: '**', redirectTo: '' },
];
