import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  path = "https://localhost:44342/api/books/getall";

  constructor(private httpClient:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.path);
  }
}
