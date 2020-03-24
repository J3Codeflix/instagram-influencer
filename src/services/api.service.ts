import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { ApiUrls } from "../constants/api-url.constants";


@Injectable()
export class ApiService {
    constructor(
        private httpClient: HttpClient) {}

    searchAll(keyword: string){
        return this.httpClient.get(ApiUrls.searchAll(keyword)).toPromise();
    }

    
}