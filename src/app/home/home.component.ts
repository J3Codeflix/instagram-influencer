import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {  
    model = {
        left: true,
        middle: false,
        right: false
    };

    closeResult = '';
    users = [];
    places = [];
    hashTags = [];
    users_count = 0;
    places_count = 0;
    hashTags_count = 0;
    total_count = 0;
    keyword;
    constructor(private api: ApiService, private modalService : NgbModal) { }

    ngOnInit() {    
    }

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }

      
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

    search() {
        console.log("HomeComponent -> search -> this.keyword", this.keyword)
        this.api.searchAll(this.keyword).then((response: any) => {
            if(response.users){
                this.users.push(...response.users);
                this.users_count = this.users.length;   
            }
            
            if(response.places) {
                this.places.push(...response.places)
                this.places_count = this.places.length;
            }
            
            if(response.hashtags) {
                this.hashTags.push(...response.hashtags)
                this.hashTags_count = this.hashTags.length;       
            }
            this.total_count = this.users_count + this.places_count + this.hashTags_count;
            console.log("HomeComponent -> search -> response", response)
        }).catch(err => console.log('error', err))
    }

    openModal(user) {
        const modalRef = this.modalService.open(ModalContainerComponent);
        modalRef.componentInstance.user = user;
    }
    
}