import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalContainerComponent } from '../modal-container/modal-container.component';
import { element } from 'protractor';
import { CalculateService } from '../../services/calculate.service';
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
    place=[];
    hashTags = [];
    users_count = 0;
    places_count = 0;
    hashTags_count = 0;
    total_count = 0;
    keyword;
    constructor(
        private api: ApiService, 
        private modalService : NgbModal,
        private calculate: CalculateService) { }

    ngOnInit() {   
        console.log(this.place);
    }
    

    open(content) {
      this.modalService.open(content);
    }

    search() {
      this.users = [];
      this.places = [];
      this.hashTags = [];
        this.api.searchAll(this.keyword).then((response: any) => {
            if(response.users){
                this.users.push(...response.users);
                this.getTotalEngagement();
                this.users_count = this.users.length;   
            }
            
            if(response.places) {
                this.places.push(...response.places)
                this.places_count = this.places.length;
                this.places.forEach( element => {
                    this.place = element.place
                })

            }
            
            if(response.hashtags) {
                this.hashTags.push(...response.hashtags)
                this.hashTags_count = this.hashTags.length;       
            }
            this.total_count = this.users_count + this.places_count + this.hashTags_count;
        }).catch(err => console.log('error', err))
    }

    openModal(user) {
        const modalRef = this.modalService.open(ModalContainerComponent);
        modalRef.componentInstance.user = user;
    }

    async getTotalEngagement() {
        const totalEngagement = await this.calculate.calculateEngagement(this.users);
        console.log("HomeComponent -> getTotalEngagement -> totalEngagement", totalEngagement)
    }

    
}