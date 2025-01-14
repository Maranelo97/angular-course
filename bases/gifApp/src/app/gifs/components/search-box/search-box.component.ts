import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gif-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
 public tagInput!: ElementRef<HTMLInputElement>;

  constructor() {}

  searchTag() {
    console.log(this.tagInput.nativeElement.value);
  }
}
