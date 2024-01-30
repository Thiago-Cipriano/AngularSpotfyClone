import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyConfiguration } from 'src/environments/environment.development';
import Spotify from 'spotify-web-api-js';
import { IUsuario } from 'src/app/pages/Interfaces/IUsuario';
import { SpotifyPlaylistParaPlaylist, SpotifyUserParaUsuario, SpotifyArtistaParaArtista, SpotifyTrackParaMusica } from 'src/app/Common/spotifyHelper';
import { IPlaylist } from '../Interfaces/IPlaylist';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IArtista } from '../Interfaces/IArtista';
import { IMusica } from '../Interfaces/IMusica';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;

constructor(private router: Router, private _http:HttpClient) {
  this.spotifyApi = new Spotify();
}

async inicializarUsuario() {
  if(!!this.usuario)
  return true;

  const token = localStorage.getItem('token');

  if(!token)
    return false;

  try {
    this.definirAccesToken(token);
    await this.obterSpotifyUsuario();
    return !!this.usuario;

  } catch(ex){
    return false;

  }
}

async obterSpotifyUsuario() {
  const userInfo = await this.spotifyApi.getMe();
  this.usuario = SpotifyUserParaUsuario(userInfo);
}

obterUrlLogin() {
  const authEndPoint = `${SpotifyConfiguration.authEndPoint}?`;
  const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
  const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
  const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
  const responseType =`response_type=token&show_dialog=true`;
  return  authEndPoint + clientId + redirectUrl + scopes + responseType;
}

obterTokenUrlCallback() {
    if (!window.location.hash)
    return '';

    const params = window.location.hash.substring(1).split('&');
    return params [0].split('=')[1];
  }

  definirAccesToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);

  }

async buscarPlaylistUsuario(offset = 0, limit = 50): Promise<IPlaylist[]>{
  const playlists = await this.spotifyApi.getUserPlaylists(this.usuario.id, { offset, limit });
  return playlists.items.map(SpotifyPlaylistParaPlaylist);
}

async buscarTopArtista(limit = 10):Promise<IArtista[]> {
  const artistas = await this.spotifyApi.getMyTopArtists({ limit });
  return artistas.items.map(SpotifyArtistaParaArtista);
}

async buscarMusicas(offset =0, limit =50): Promise<IMusica[]> {
  const musicas = await this.spotifyApi.getMySavedTracks({ offset, limit });
  return musicas.items.map(x => SpotifyTrackParaMusica(x.track));
}

logout() {
  localStorage.clear();
  this.router.navigate(['/login']);
}

async executarMusica(musicaId: string) {
  await this.spotifyApi.queue(musicaId);
  await this.spotifyApi.skipToNext();
}

getUserInformation() {
  const url = SpotifyConfiguration.spotifyApi + '/me';
  let userToken = localStorage.getItem('token')
  const observable = this._http.get (url, { headers: { 'Authorization': 'Bearer ' + userToken}})
  return observable;
  }
}


