export const environment = {
  production: false
};

export const SpotifyConfiguration = {
  clientId: '66744b204f674bc1bbefceed9b33eb57',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',

  scopes: [
    "user-read-currently-playing", //musica tocando agora
    "user-read-recently-played", // ler musicas tocadas recentemente
    "user-read-playback-state", // ler estado do playewr do usuário
    "user-top-read", // top artistas e musicas do usuario
    "user-modify-playback-state", // alterar player do usuario
    "user-library-read", // ler biblioteca do usuario
    "playlist-read-private", //ler playlists privadas
    "playlist-read-collaborative" // ler playlist colaborativas
  ]
}
