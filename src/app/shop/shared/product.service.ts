import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    let params = new HttpParams({
      fromObject: {
        per_page: '6'
      }
    });

    return this.http.get('/api/products', {
      params: params
    });
  }
}
