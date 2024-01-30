import { IUsuario } from "src/app/pages/Interfaces/IUsuario";
import { IPlaylist } from "src/app/pages/Interfaces/IPlaylist";
import { IArtista } from "../pages/Interfaces/IArtista";
import { IMusica } from "../pages/Interfaces/IMusica";
import { addMilliseconds, format } from "date-fns";


export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
  return {
    id: user.id,
    nome: user.display_name,
    imagemUrl: user.images.pop().url
  }
}

export function SpotifyPlaylistParaPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist{
  return {
    id: playlist.id,
    nome: playlist.name,
    imagemUrl: playlist.images.pop().url
  };
}

export function SpotifyArtistaParaArtista(spotifyArtista: SpotifyApi.ArtistObjectFull) : IArtista{
  return {
    id: spotifyArtista.id,
    imagemUrl: spotifyArtista.images.sort((a, b) => a.width - b.width).pop().url,
    nome: spotifyArtista.name
  };
}

export function SpotifyTrackParaMusica(spotifyTrack: SpotifyApi.TrackObjectFull) : IMusica {

  const msParaMinutos = (ms: number) => {
    const data = addMilliseconds(new Date(0), ms);
    return format(data, 'mm:ss');
  }

   return  {
     id: spotifyTrack.uri,
     titulo: spotifyTrack.name,
      album: {
        id: spotifyTrack.id,
       imagemUrl: spotifyTrack.album.images.shift().url,
       nome: spotifyTrack.name
     },
     artistas: spotifyTrack.artists.map(artistas => ({
       id: artistas.id,
       nome: artistas.name,
     })),

     tempo: msParaMinutos(spotifyTrack.duration_ms),


  }
}
