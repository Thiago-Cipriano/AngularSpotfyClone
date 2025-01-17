import { Injectable } from '@angular/core';
import { IMusica } from '../Interfaces/IMusica';
import { newMusica } from 'src/app/Common/factories';
import { BehaviorSubject} from 'rxjs';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  musicaAtual = new BehaviorSubject<IMusica>(newMusica());
  timerId: any = null;

  constructor(private spotifyService: SpotifyService) {
    this.obterMusicaAtual();
  }

  async obterMusicaAtual(){
    clearTimeout(this.timerId);

    //Obter Múscia
    const musica = await this.spotifyService.obterMsuicaAtual();
    this.definirMsuicaAtual(musica);

    //Causar Loop
    this.timerId = setInterval(async () => {
      await this.obterMusicaAtual();
    }, 3000)
  }

  definirMsuicaAtual(musica: IMusica){
    this.musicaAtual.next(musica);
  }

}
