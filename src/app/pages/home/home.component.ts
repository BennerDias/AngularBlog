import { Component } from '@angular/core';
import { dataFake } from '../../components/data/dataFake'

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    public data = dataFake;
    public bigCardData = this.data[0];
    public smallCardData = this.data.slice(1);
}
