import { Component, inject } from '@angular/core';
import { WorldAPI } from '../world-api.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  private worldAPI = inject(WorldAPI);

  prevId = '';

  onCountryClick(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    let id = target.getAttribute('id');
    id = String(id);
    console.log(id);
    console
    if (id == "null") {
      console.log("id is null");
    }
    else if (this.prevId == id) {
      console.log("same id");
    }
    else {
      this.worldAPI.worldAPIRequest(id);
      this.prevId = id;
    }
  }
}
