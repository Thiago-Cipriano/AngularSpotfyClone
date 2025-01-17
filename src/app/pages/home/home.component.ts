import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMusica } from '../Interfaces/IMusica';
import { SpotifyService } from '../services/spotify.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { newMusica } from 'src/app/Common/factories';
import { PlayerService } from '../services/player.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  musicas: IMusica[] = [];
  musicaAtual: IMusica = newMusica();

  subs: Subscription[] = [];

  //PlayIcon
  PlayIcone = faPlay;

  constructor(
    private spotService: SpotifyService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.obterMusicas();
    this.obterMusicaAtual();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  async obterMusicas() {
    this.musicas = await this.spotService.buscarMusicas();
  }

  obterMusicaAtual() {
    const sub = this.playerService.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica;
    });

    this.subs.push(sub);
  }

  oberArtistas(musica: IMusica) {
    return musica.artistas.map(artista => artista.nome).join(', ')
  }

  async executarMusica(musica: IMusica) {
    await this.spotService.executarMusica(musica.id);
    this.playerService.definirMsuicaAtual(musica);
  }

}
