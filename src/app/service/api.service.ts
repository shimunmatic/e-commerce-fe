import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Category } from '../model/category.model';
import { ResponseObject } from '../model/response.model';
import { Item, PageableContent } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<ResponseObject<Category[]>> {
    return this.http.get<ResponseObject<Category[]>>(`${this.url}/api/item/v1/categories`);
  }

  getItemsForCategory(categoryId: number): Observable<ResponseObject<PageableContent<Item>>> {
    return this.http.get<ResponseObject<PageableContent<Item>>>(`${this.url}/api/item/v1/items?categoryId=${categoryId}`);
  }
}