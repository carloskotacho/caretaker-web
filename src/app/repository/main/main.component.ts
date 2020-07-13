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
    this.findAll();
  }

  add() {
    this.repositoryService.add(this.filter)
      .then(repository => {
        this.repositories.push(repository);
        this.save(this.repositories);
      });
  }

  save(repositories: any[]) {
    const repoReverse = this.repositories.reverse();
    localStorage.setItem('infoRepo', JSON.stringify(repoReverse));
  }

  findAll() {
    const infoRepo = localStorage.getItem('infoRepo');

    if (infoRepo) {
      this.repositories = JSON.parse(infoRepo);
    }
  }
}
