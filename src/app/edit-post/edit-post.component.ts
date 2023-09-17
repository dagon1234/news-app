// edit-post.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  postId: number | any;
  post: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id']; // Get the post ID from the route parameter and convert it to a number
      this.fetchPostData(this.postId); // Fetch post data by ID
    });
  }

  fetchPostData(postId: number): void {
    this.dataService.getPostById(postId).subscribe(data => {
      this.post = data;
    });
  }

  onSubmit(): void {
    // Call your data service to update the post data in your JSON data source
    this.dataService.updatePost(this.post).subscribe(response => {
      // Handle success (e.g., show a success message)
      this.router.navigate(['/posts']); // Redirect to the news page or the post detail page
    }, error => {
      // Handle error (e.g., display an error message)
      console.error('Error updating post:', error);
    });
  }
}
