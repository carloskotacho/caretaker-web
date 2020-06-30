import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

export class RepositoryFilter {
  search: string;
}

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  repositoryUrl: string;

  constructor(private http: Http) {
    this.repositoryUrl = `${environment.apiUrl}/repos`;
  }

  search(filter: RepositoryFilter): Promise<any> {

    return this.http.get(`${this.repositoryUrl}/${filter.search}`)
      .toPromise()
      .then(response => response.json());
  }
}


// https://api.github.com/repos/angular/components
// /repos/:owner/:repo
