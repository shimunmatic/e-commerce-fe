import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'showcase-carousel',
  templateUrl: './showcase-carousel.component.html',
  styleUrls: ['./showcase-carousel.component.css']
})
export class ShowcaseCarouselComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1920/500`)
  constructor() { }

  ngOnInit(): void {
  }

}
