import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MapComponent } from "../map/map.component";
import { ResultsComponent } from "../results/results.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MapComponent, ResultsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
