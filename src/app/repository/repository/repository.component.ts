import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService, RepositoryFilter } from '../repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

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

  findAllPrs() {
    this.repositoryService.findAllPrs(this.filter)
      .then(prs => {

        prs.forEach(pr => {

          const infoPr = {
            title: pr.title,
            htmlUrl: pr.html_url,
            number: pr.number,
            userLogin: pr.user.login
          };

          this.prs.push(infoPr);
        });
      });
  }

}
