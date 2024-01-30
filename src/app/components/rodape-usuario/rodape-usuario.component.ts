import { Component, OnInit } from '@angular/core';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/pages/Interfaces/IUsuario';
import { SpotifyService } from 'src/app/pages/services/spotify.service';

@Component({
  selector: 'app-rodape-usuario',
  templateUrl: './rodape-usuario.component.html',
  styleUrls: ['./rodape-usuario.component.scss']
})
export class RodapeUsuarioComponent implements OnInit {

  sairIcone = faSignOutAlt;
  usuario: any = null;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotifyService.getUserInformation().subscribe(userInfo => {
      this.usuario = userInfo;
    });

  }

  logout() {
    this.spotifyService.logout();
  }

}
