import { Component, OnInit } from '@angular/core';
import { RepositoryFilter, RepositoryService } from '../repository.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  filter = new RepositoryFilter();
  avatarUrl = "undefined";
  fullName = "undefined";
  description = "undefined";
  repositories = [];

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit() {
    // this.search();
  }

  search() {
    this.repositoryService.search(this.filter)
      .then(repository => {
        this.avatarUrl = repository.owner.avatar_url;
        this.fullName = repository.full_name;
        this.description = repository.description;

        console.log('fullName: ', this.fullName);

        this.repositories.push(this.fullName);

      });
  }

}
