import { Component, OnInit } from '@angular/core';

import * as data from 'src/assets/data/ascoltatiDiRecente.json';

@Component({
  selector: 'app-ascoltati-di-recente',
  templateUrl: './ascoltati-di-recente.component.html',
  styleUrls: ['./ascoltati-di-recente.component.scss']
})
export class AscoltatiDiRecenteComponent implements OnInit {
  recentlyListened;

  constructor() { }

  ngOnInit(): void {
    this.recentlyListened = data;
    this.recentlyListened = this.recentlyListened.default;
  }

}
