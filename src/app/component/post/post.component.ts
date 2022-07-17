import { PostsService } from './../../services/posts.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private router: Router, private postService: PostsService) { }

  ngOnInit(): void { }

  onSubmit(form: any) {
    this.postService.setPost(form.value).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/posts']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
