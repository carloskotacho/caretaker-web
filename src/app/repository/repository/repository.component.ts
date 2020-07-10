import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  loginRepo: string;
  nameRepo: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginRepo = this.route.snapshot.params['login'];
    this.nameRepo = this.route.snapshot.params['name'];
  }

}
