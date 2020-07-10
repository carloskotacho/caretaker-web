import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

export class RepositoryFilter {
  fullName: string;
  login: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repositoryUrl: string;

  constructor(private http: Http) {
    this.repositoryUrl = `${environment.apiUrl}/repos`;
  }

  add(filter: RepositoryFilter): Promise<any> {

    return this.http.get(`${this.repositoryUrl}/${filter.fullName}`)
      .toPromise()
      .then(response => response.json());
  }

  findAllPrs(filter: RepositoryFilter): Promise<any> {

    return this.http.get(`${this.repositoryUrl}/${filter.login}/${filter.name}/pulls`)
      .toPromise()
      .then(response => response.json());
  }
}

// https://api.github.com/repos/angular/components
// /repos/:owner/:repo

// https://api.github.com/repos/angular/components/pulls
// /repos/:owner/:repo/pulls
