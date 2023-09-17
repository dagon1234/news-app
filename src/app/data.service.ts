import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private jsonData: any[] = [];

  constructor(private http: HttpClient) { }

  // Fetch data from the API and store it in the variable
  fetchData() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.jsonData = data;
    });
  }

  // Get the stored JSON data
  getJsonData() {
    return this.jsonData;
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPost(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updatePost(post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${post.id}`, post);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${postId}`);
  }
}
