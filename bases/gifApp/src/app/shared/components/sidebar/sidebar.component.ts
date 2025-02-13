import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public historial: string[] = [];
  constructor(private gifs: GifsService) { }

  get tags() {
    return this.gifs.tagsHistory;
  }
  searchAgain(tag: string) {
    this.gifs.searchTag(tag);
  }
}
