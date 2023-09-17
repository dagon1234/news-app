import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchData(); // Fetch JSON data from the service
    this.posts = this.dataService.getJsonData(); // Get the stored JSON data
  }

  fetchPosts(): void {
    this.dataService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }

  deletePost(postId: number): void {
    if (confirm('Are you sure you want to delete this post?')) {
      this.dataService.deletePost(postId).subscribe(() => {
        // Refresh the list of posts after successful deletion
        this.fetchPosts();
      });
    }
  }
}
