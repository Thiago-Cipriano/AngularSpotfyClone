import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrls: ['./botao-menu.component.scss']
})
export class BotaoMenuComponent implements OnInit {

  @Input()
  descricao = '';

  @Input()
  selecionado = false;

  @Output()
  click = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.click.emit();
  }

}
