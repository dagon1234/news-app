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

  getPostById(id: number) {
    return this.http.get(`${this.apiUrl}/posts/${id}`);
  }

  updatePost(postData: any) {
    return this.http.put(`${this.apiUrl}/posts/${postData.id}`, postData);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${postId}`);
  }

  addPost(postData: any): Observable<any> {
    // Send an HTTP POST request to create a new post
    return this.http.post<any>(this.apiUrl, postData);
  }
}
