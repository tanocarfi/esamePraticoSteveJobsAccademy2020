import { Component, OnInit } from '@angular/core';

import * as data from 'src/assets/data/playlist.json';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlists;

  constructor() { }

  ngOnInit(): void {
    this.playlists = data;
    this.playlists = this.playlists.default;
  }

}
