import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../model/user.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {

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
    }).catch(err => console.log('error', err))
  }

}
