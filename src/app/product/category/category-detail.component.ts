import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  public category: any = null;
  public products: any[] = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        params => {
          if (undefined !== params['id']) {
            this.find(+params['id'])
          } else {
            this.getAllProducts();
          }
        }
      );
  }

  find(id:number) {
    this.category = null;
    this.products = null;

    this.http.get('/api/categories/' + id)
      .subscribe((category:any[]) => this.category = category);

    this.http.get('/api/categories/' + id + '/products')
      .subscribe((result:any) => this.products = result.data);

  }


  getAllProducts() {
    this.category = null;
    this.products = null;

    let params = new HttpParams({
      fromObject: {
        per_page: '6'
      }
    });

    this.http.get('/api/products', {
      params: params
    })
      .subscribe((result:any) => this.products = result.data);
  }

}
