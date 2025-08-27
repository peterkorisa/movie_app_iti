import { Routes } from '@angular/router';
import { Movielist } from './components/movielist/movielist';
import { WatchlistCard } from './components/watchlist-card/watchlist-card';
import { Moviedetails } from './components/moviedetails/moviedetails';
import { SearchBar } from './components/search-bar/search-bar';

export const routes: Routes = [
  { path: 'movielist/:page_number', component: Movielist },
  { path: 'movielist', component: Movielist },
  { path: 'search/:query', component: SearchBar },
  { path: 'watchlist', component: WatchlistCard },
  { path: 'movie/:id', component: Moviedetails },
  { path: '', redirectTo: 'movielist', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
