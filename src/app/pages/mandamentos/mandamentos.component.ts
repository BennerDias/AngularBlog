import { Component } from '@angular/core';

@Component({
  selector: 'app-mandamentos',
  standalone: false,

  templateUrl: './mandamentos.component.html',
  styleUrl: './mandamentos.component.css'
})
export class MandamentosComponent {
  mandamentos: string[] = [
    'Amar o Corinthians acima de qualquer resultado, partida e jogador',
    'Nada é mais importante do que o jogo do Corinthians',
    'Aqui é Corinthians. Aqui é na raça',
    'A Fiel não vaia. A Fiel apoia os 90 minutos',
    'Nossas glórias mil são contra tudo e contra todos',
    'O bando grita mais forte quando o Timão está perdendo',
    'Sofredor hoje. Sofredor amanhã. Sofredor pra sempre. Graças a Deus',
    'Este time só tem um dono. Este time é do povo',
    'Eu nunca vou te abandonar. Porque eu te amo',
    'Vai, Corinthians!'
  ]
}
