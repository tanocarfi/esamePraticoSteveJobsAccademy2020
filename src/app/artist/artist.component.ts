import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as artists from 'src/assets/data/artists.json';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artists;
  artist;
  id: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.artists = artists;
    this.artists = this.artists.default;

    this.artists.forEach(artist => {
      artist.id == this.id ? this.artist = artist : '';
    })
  }

}
