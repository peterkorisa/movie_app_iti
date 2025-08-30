import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Watchlistservice } from '../../services/watchlistservice';
import { AsyncPipe, NgIf } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
    constructor(public watchlistService: Watchlistservice) {}

}
