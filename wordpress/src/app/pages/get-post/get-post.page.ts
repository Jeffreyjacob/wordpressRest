import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostServiceService } from 'src/app/services/post-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.page.html',
  styleUrls: ['./get-post.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GetPostPage implements OnInit {
  postData: any 
  constructor(private PostServie: PostServiceService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }
  async getData(){
    await this.PostServie.getPost()
    .subscribe(
      res =>{
        console.log(res);
        this.postData =res;
        console.log(this.postData);
      }, err =>{
        console.log(err);
      }
    )
  }
  createPost(){
   this.router.navigateByUrl('create-post')
  }

}
