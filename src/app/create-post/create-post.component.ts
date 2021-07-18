import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  saludo:string = "Hello Everyone"
  texto:string = '';
  content:string[] = [];
  posts:Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addPost():void{
    this.content.push(this.texto);
  }
}
