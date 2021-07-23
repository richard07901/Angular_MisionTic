import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

import { Post } from '../../models/post.model';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  posts:Post[] = [];
  // @Output() postCreated = new EventEmitter<Post>();
  // titleFormControl = new FormControl('', [Validators.required, Validators.title, ]);
  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }


  onAddPost(form:NgForm):void{
    if (form.valid){
      this.postService.addPost(form.value);
      // this.postCreated.emit(form.value);
      form.resetForm();
    }
  }
}
