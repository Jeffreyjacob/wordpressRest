import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreatePostPage implements OnInit {
  title:any
  Content: any

  constructor(private postService: PostServiceService) { }

  ngOnInit() {
  }
   
   async onAddPost(){
   this.postService.postQuotes(this.title,this.Content)
   .subscribe()
  }
}
