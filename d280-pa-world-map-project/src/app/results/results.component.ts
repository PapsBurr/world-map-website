import { Component, computed, inject, signal } from '@angular/core';
import { WorldAPI } from '../world-api.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent{
  private worldAPI = inject(WorldAPI);

  receivedData = computed(() => this.worldAPI.countryData());
}