import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import {Post} from '../../models/post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts:Post[] = [];
  private postsSub: Subscription;


  // @Input() posts:Post[] = [];
  constructor(public postService: PostService) {
    this.postsSub = this.postService.getPostsUpdateListener()
    .subscribe((posts: Post[]) =>{
        this.posts = posts;
    });
  }

  ngOnInit(): void {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostsUpdateListener()
    .subscribe((posts: Post[]) =>{
        this.posts = posts;
    });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

  onDelete(id:string): void{
    this.postService.deletePost(id)
  }

}
