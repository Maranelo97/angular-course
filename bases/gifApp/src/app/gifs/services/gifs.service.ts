import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'tjtUQpgOUHdemOn4VeeXGd0G71H9APad';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';

  public gifList: Gif[] = [];
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  searchTag(tag: string): void {
    if (tag.length === 0) {
      return;
    }

    this.organizeHistory(tag);
    let q = tag;

    const params = new HttpParams()
      .set('api-key', this.apiKey)
      .set('limit', 10)
      .set('q', q);

    this.http
      .get<SearchResponse>(
        `${this.serviceUrl}/search?api_key=${this.apiKey}&q=${q}&limit=10`
      )
      .subscribe((result) => {
        this.gifList = result.data;
      });
  }
}
