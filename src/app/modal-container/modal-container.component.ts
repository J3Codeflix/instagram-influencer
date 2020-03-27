import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../model/user.model';
import { ApiService } from '../../services/api.service';
import { AngularSectionComponent } from '../sections/angular-section/angular-section.component';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {

  edges = [];
  total_likes = 0;
  total_comments = 0;
  er : any;

  user: User;
  @Input() users:any;
  constructor(
    private api: ApiService,
    public modalService: NgbModal
  ) {
    this.user = this.users;
 }

  ngOnInit(){
      this.searchUsername();
  }

  searchUsername(){
    this.api.searchUsername(this.user.user.username).then((response: any) => {
        this.user.user.biography = response.graphql.user.biography;
        this.user.user.follower_count = response.graphql.user.edge_followed_by.count;
        this.user.user.following_count = response.graphql.user.edge_follow.count;
        this.user.user.post_count  = response.graphql.user.edge_owner_to_timeline_media.count;
        this.edges = response.graphql.user.edge_owner_to_timeline_media.edges;
        this.edges.forEach(element => {
          this.total_comments += element.node.edge_media_to_comment.count;     
          this.total_likes += element.node.edge_media_preview_like.count;     
        });
        this.user.user.total_comment_count = this.total_comments;
        this.user.user.total_likes_count = this.total_likes;
        const total_likes_comments = this.total_comments + this.total_likes;
        this.er = total_likes_comments / this.user.user.follower_count * 100;  
        this.user.user.engagement_rate = this.er.toFixed(2);   
     
    }).catch(err => console.log('error', err))
  }

}
