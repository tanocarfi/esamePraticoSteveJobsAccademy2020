import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { AscoltatiDiRecenteComponent } from './ascoltati-di-recente/ascoltati-di-recente.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'playlist',
    component: PlaylistComponent
  },
  {
    path: 'ascoltatiDiRecente',
    component: AscoltatiDiRecenteComponent
  },
  {
    path: 'artista/:id',
    component: ArtistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
