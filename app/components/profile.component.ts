import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';


@Component({
	moduleId : module.id,
	selector : 'profile',
	templateUrl : 'profile.component.html',
	providers : [GithubService]
})

export class ProfileComponent {
	private userProfile : any;
	private userRepos : any;
	private username : string;
	constructor(private _githubService : GithubService){
		this.userProfile = false;
	}

	searchUser() {
		this.
			_githubService
			.updateUser(this.username);
		
		this
			._githubService
			.getUserProfile()
			.subscribe(user => {
				this.userProfile = user;
					
		})

		this
			._githubService.getUserRepos()
			.subscribe(repos => {
				this.userRepos = repos;				
		})		
	}
}
