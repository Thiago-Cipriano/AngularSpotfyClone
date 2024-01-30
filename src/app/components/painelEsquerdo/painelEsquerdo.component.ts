import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/pages/Interfaces/IPlaylist';
import { SpotifyService } from 'src/app/pages/services/spotify.service';


@Component({
  selector: 'app-painelEsquerdo',
  templateUrl: './painelEsquerdo.component.html',
  styleUrls: ['./painelEsquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  menuSelecionado = 'Home';

  playlists: IPlaylist[ ] = [ ];

  homeIcone = faHome;
  pesquisarIcone = faSearch;
  artistaIcone = faGuitar;
  playlistIcone = faMusic;

  constructor(
    private router: Router,
    private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  botaoClick(botao: string){
    this.menuSelecionado = botao;
    this.router.navigateByUrl('player/home')
  }

  async buscarPlaylists(){
    this.playlists =  await this.spotifyService.buscarPlaylistUsuario();
  }

}
