import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  newPost: any = {};

  constructor(private dataService: DataService) {}

  onSubmit(): void {
    // Generate a unique ID (UUID) for the new post
    const postId = uuidv4();

    // Create the postData object with the new post data
    const postData = {
      id: postId,
      title: this.newPost.title,
      body: this.newPost.body
      // Add any other properties as needed
    };

    // Call the addPost method from your DataService to create a new post
    this.dataService.addPost(postData).subscribe(response => {
      // Handle success (e.g., show a success message)
      console.log('Post added successfully:', response);
      // Optionally, you can navigate to another page after adding the post
      // this.router.navigate(['/posts']); // Redirect to the posts page
    }, error => {
      // Handle error (e.g., display an error message)
      console.error('Error adding post:', error);
    });
  }
}
