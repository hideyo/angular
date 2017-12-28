import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {

  currentFile: string = null;

  @Input() images: any[];

  constructor() { }

  ngOnInit() {
    this.select(this.images[0]);
  }

  select(image:any) {
    this.images.map(img => img.active = false);
    image.active = true;

    this.currentFile = image.url;
  }

}
