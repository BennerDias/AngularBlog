import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: false,

  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
   @Input() data!: { id: number; img: string; title: string; textContent: string; date: string };
}
