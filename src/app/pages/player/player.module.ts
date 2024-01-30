import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRotas} from './player.routes'
import { RouterModule } from '@angular/router';
import { PainelEsquerdoComponent } from 'src/app/components/painelEsquerdo/painelEsquerdo.component';
import { BotaoMenuComponent } from 'src/app/components/botaoMenu/botao-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeUsuarioComponent } from 'src/app/components/rodape-usuario/rodape-usuario.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistaComponent } from 'src/app/components/top-artista/top-artista.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRotas)

  ],
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,
    RodapeUsuarioComponent,
    HomeComponent,
    TopArtistaComponent
  ]
})
export class PlayerModule { }