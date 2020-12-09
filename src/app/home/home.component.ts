import { Component, OnInit } from '@angular/core';

import * as ascoltatiDiRecente from 'src/assets/data/ascoltatiDiRecente.json';
import * as playlists from 'src/assets/data/playlist.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recentlyListened;
  playlists;

  constructor() { }

  ngOnInit(): void {
    this.recentlyListened = ascoltatiDiRecente;
    this.recentlyListened = this.recentlyListened.default;

    this.playlists = playlists;
    this.playlists = this.playlists.default
  }

}
