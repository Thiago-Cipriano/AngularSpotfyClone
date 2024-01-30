import { Component, OnInit } from '@angular/core';
import { IMusica } from '../Interfaces/IMusica';
import { SpotifyService } from '../services/spotify.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  musicas: IMusica[] = [];

  //PlayIcon
  PlayIcone = faPlay;

  constructor(
    private spotService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.obterMusicas();
  }

  async obterMusicas() {
    this.musicas = await this.spotService.buscarMusicas();
  }

  oberArtistas(musica: IMusica) {
    return musica.artistas.map(artista => artista.nome).join(', ')
  }

  async executarMusica(musica: IMusica) {
    await this.spotService.executarMusica(musica.id);
  }

}
