import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.http.get('/api/categories')
      .subscribe((categories:any[]) => this.categories = categories);
  }

}
