import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Watchlistservice } from '../../services/watchlistservice';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public watchlistService: Watchlistservice) {}
}
