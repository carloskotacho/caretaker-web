import { Component, OnInit } from '@angular/core';
import { RepositoryFilter, RepositoryService } from '../repository.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  filter = new RepositoryFilter();
  repositories = [];

  constructor(private repositoryService: RepositoryService) {}

  ngOnInit() {
    // this.search();
  }

  search() {
    this.repositoryService.search(this.filter)
      .then(repository => {
        this.repositories.push(repository);

        console.log(this.repositories);
      });
  }

}
