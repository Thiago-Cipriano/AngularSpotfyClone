import { IArtista } from "../pages/Interfaces/IArtista";
import { IMusica } from "../pages/Interfaces/IMusica";

export function newArtista(): IArtista {
  return {
    id: '',
    imagemUrl: '',
    nome: '',
  };
}


export function newMusica(): IMusica {
  return {
    id: '',
    album: {
      id: '',
      imagemUrl: '',
      nome: '',
    },
    artistas: [],
    tempo: '',
    titulo: '',
  }
}
