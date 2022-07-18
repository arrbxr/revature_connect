
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  getDataurl = "http://localhost:8080/api/postService/getPost";
  setDataurl = "http://localhost:8080/api/postService/save";
  deleteUrl = "http://localhost:8080/api/postService/delete/{id}";

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable <any>{
    return this.http.get(this.getDataurl);
  }

  setPost(post: any): Observable <any>{
    return this.http.post(this.setDataurl, post);
  }

  deletePost(post: any): Observable <any>{
    return this.http.delete(this.deleteUrl.replace("{id}", post));
  }


}
