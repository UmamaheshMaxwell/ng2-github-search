import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';



@Injectable()

export class GithubService {
    private username : string;
    private clientId : string = 'ef4116db014294b623ea';
    private clientSecret : string = '4da6c8e33a4022293fceb211bc6735ccba14dc18';

    constructor(private _http: Http){
        console.log('GitHub Service Ready...');
        this.username = 'UmamaheshMaxwell';
    }

    getUserProfile(): Observable<any>{
        return this
                ._http
                .get('https://api.github.com/users/'+ this.username+'?client_id='+ this.clientId+'&client_secret='+ this.clientSecret)
                .map(res => res.json());
    }

    getUserRepos() : Observable<any> {
        return this
                ._http
                .get('https://api.github.com/users/'+ this.username + '/repos'+ '?client_id='+ this.clientId+'&client_secret='+ this.clientSecret)
                .map(response => {
                    return response.json();
                })
    }

    updateUser(username: string){
        this.username = username;
    }
}