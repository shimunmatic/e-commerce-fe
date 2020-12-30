import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../model/category.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'categories-sidebar',
  templateUrl: './categories-sidebar.component.html',
  styleUrls: ['./categories-sidebar.component.css']
})
export class CategoriesSidebarComponent implements OnInit {
  categories: Category[];

  constructor(private apiService: ApiService, private router: Router) {
    apiService.getAllCategories().subscribe(data=>{
      this.categories = data;
    });
  }

  ngOnInit(): void {
  }

  onSelect(category: Category){
    console.log(category);
    this.router.navigate(['search'], {state:{category: category}});
  }

}
