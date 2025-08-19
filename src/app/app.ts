import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { MovieCard } from "./components/movie-card/movie-card";



@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, MovieCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('movie_app');
}
