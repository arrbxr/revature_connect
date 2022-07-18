import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService, private router: Router) { }

  defaultImage: string = 'https://fakeimg.pl/350x200/?text=';

  posts: any[] = [];

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
      console.log(data);
    });
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe((data) => {
      console.log(data);
      this.reloadData();
    },
      (error) => {
        console.log(error);
      }
    );
  }

  likeButtonClick(post: any) {
    post.likes == 0 ? post.likes++ : post.likes = 0;
  }

}
