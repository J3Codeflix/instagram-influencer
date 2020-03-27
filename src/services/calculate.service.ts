import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { ApiUrls } from "../constants/api-url.constants";
import { User } from "../app/model/user.model";
import { ApiService } from "./api.service";


@Injectable()
export class CalculateService {
    edges = [];
    
    er : any;

    totalEngagement = 0;
    constructor(
        private api: ApiService) {}

    async calculateEngagement(users: User[]) {
        console.log("CalculateService -> calculateEngagement -> users", users)
        users.forEach(user => {
            this.api.searchUsername(user.user.username).then(async (response: any) => {
                user.user.biography = response.graphql.user.biography;
                user.user.follower_count = response.graphql.user.edge_followed_by.count;
                user.user.following_count = response.graphql.user.edge_follow.count;
                user.user.post_count  = response.graphql.user.edge_owner_to_timeline_media.count;
                const edges = response.graphql.user.edge_owner_to_timeline_media.edges;
                let total_likes = 0;
                let total_comments = 0;
                edges.forEach(element => {
                    total_comments += element.node.edge_media_to_comment.count;     
                    total_likes += element.node.edge_media_preview_like.count;     
                });
                user.user.total_comment_count = total_comments;
                user.user.total_likes_count = total_likes;
                const total_likes_comments = total_comments + total_likes;
                this.er = total_likes_comments / user.user.follower_count * 100;  
                user.user.engagement_rate = this.er.toFixed(2);   
                console.log("CalculateService -> calculateEngagement -> user.user.engagement_rate", user.user.engagement_rate)
                this.totalEngagement = this.totalEngagement + +user.user.engagement_rate;
                console.log("CalculateService -> calculateEngagement -> this.totalEngagement", this.totalEngagement)
            }).catch(err => console.log('error', err))

        });
        return await this.totalEngagement;
    }

    
}