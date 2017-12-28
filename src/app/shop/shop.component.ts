import { Component, OnInit } from '@angular/core';

import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: any[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAll()
      .subscribe((result:any) => this.products = result.data);
  }

}
