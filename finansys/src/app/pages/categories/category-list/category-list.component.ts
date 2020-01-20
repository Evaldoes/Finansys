import { CategoryService } from './../shared/category.service';
import { Category } from './../shared/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor() { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      this.categories => this.categories = categories,
      error => alert('erro ao carregar a lista')
    )
  }

}
