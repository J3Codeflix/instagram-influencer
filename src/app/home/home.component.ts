import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

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

    users = [];
    places = [];
    hashTags = [];

    keyword;
    constructor(private api: ApiService) { }

    ngOnInit() {}

    search() {
        console.log("HomeComponent -> search -> this.keyword", this.keyword)
        this.api.searchAll(this.keyword).then((response: any) => {
            if(response.users){
                this.users.push(...response.users);
            }else if(response.places) {
                this.places.push(...response.places)
            }else if(response.hashtags) {
                this.hashTags.push(...response.hashtags)
            }
            console.log("HomeComponent -> search -> response", response)
        }).catch(err => console.log('error', err))
    }
    
}