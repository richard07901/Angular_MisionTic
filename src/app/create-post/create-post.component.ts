import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  saludo:string = "Hello Everyone"
  texto:string = '';
  content:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addPost():void{
    this.content = this.texto;
  }
}
