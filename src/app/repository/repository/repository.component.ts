import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService, RepositoryFilter } from '../repository.service';

import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  totalPrs = 0;
  filter = new RepositoryFilter();
  loginRepo: string;
  nameRepo: string;
  prs = [];

  constructor(
    private repositoryService: RepositoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginRepo = this.route.snapshot.params['login'];
    this.nameRepo = this.route.snapshot.params['name'];

    this.filter.login = this.loginRepo;
    this.filter.name = this.nameRepo;

    this.findAllPrs();
  }

  findAllPrs(page = 1) {
    this.filter.page = page;

    this.repositoryService.findAllPrs(this.filter)
      .then(prs => {
        this.totalPrs = prs.totalPrs;
        this.prs = prs.results;
      });
  }

  whenChangingPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;
    this.findAllPrs(page);
  }

}
