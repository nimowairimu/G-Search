import { Component, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  userRepos:Repos[]
  constructor(public repoService:RepoService){ }
  
  findRepo(username){
    this.repoService.getRepoDetails(username).subscribe(data =>{
      this.userRepos = data;
      console.log(this.userRepos)
    })
  }
  

  ngOnInit() {
    this.findRepo('nimowairimu');
  }

}
