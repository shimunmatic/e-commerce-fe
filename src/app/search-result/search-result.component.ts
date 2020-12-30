import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../model/category.model';
import { Item } from '../model/item.model';
import { ApiService } from '../service/api.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchedCategory: Category;
  cdnUrl = environment.cdnUrl;
  items: Item[];

  constructor(private router: Router, private apiService: ApiService) {
    this.searchedCategory = this.router.getCurrentNavigation().extras.state.category;
    if (this.searchedCategory !== null) {
      this.apiService.getItemsForCategory(this.searchedCategory.id).subscribe(data => {
        this.items = data.data.content;
        console.log(this.items);
      })
    }
  }

  ngOnInit(): void {
  }

}
