import { DestroyRef, Injectable, Signal, inject, signal } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class WorldAPI {
  
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  countryData = signal<any[] | undefined>(undefined);

  worldAPIRequest(id: string) {
    console.log("ID sent to API");
    const subscription = this.httpClient.get<any[]>("https://api.worldbank.org/v2/country/" + id + "?format=json").subscribe({
      next: (resData: any[]) => {
        console.log(resData);
        this.countryData.set(resData[1]);
      },
      error: (errorData) => {
        console.log(errorData);
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
