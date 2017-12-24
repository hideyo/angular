import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

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
        params => this.find(+params['id'])
      );
  }

  find(id:number) {
    this.category = null;
    this.products = null;

    this.http.get('/api/categories/' + id)
      .subscribe((category:any[]) => this.category = category);

    this.http.get('/api/categories/' + id + '/products')
      .subscribe((products:any[]) => this.products = products);
  }

}