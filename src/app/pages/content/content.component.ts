import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../components/data/dataFake'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-content',
  standalone: false,

  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  public data = dataFake;
  public selectedData: { id: number; img: string; title: string; textContent: string; date: string; materia: string } | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura o ID da URL
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.getDataById(id); // Busca os dados com base no ID
    });
  }

  getDataById(id: number): void {
    // Filtra os dados no dataFake para encontrar o item correspondente
    this.selectedData = this.data.find((item) => item.id === id);
  }
}
