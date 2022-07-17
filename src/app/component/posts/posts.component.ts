import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService) { }

  defaultImage: string = 'https://fakeimg.pl/350x200/?text=';

  posts: any[] = [];

  ngOnInit() {
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
      console.log(data);
    });
  }

  deletePost(id: string) {
    this.postService.deletePost(id).subscribe((data) => {
      console.log(data);
      this.posts = this.posts.filter((post) => post.postID !== id);
    });
  }

  likeButtonClick(val: any) {
    console.log(val)
  }

  likeButtonClass() {
    return "text-sucees";
  }
}
