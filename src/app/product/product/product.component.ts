import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: any[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.http.get('/api/products')
      .subscribe((products:any[]) => this.products = products);
  }

}
