import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: any = { id: '', title: '', body: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.dataService.getPost(postId).subscribe((data: any) => {
        this.post = data;
      });
    }
  }

  onSubmit(): void {
    this.dataService.updatePost(this.post).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }
}
