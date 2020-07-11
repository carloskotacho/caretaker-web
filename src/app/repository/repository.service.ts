import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { environment } from '../../environments/environment';

export class RepositoryFilter {
  fullName: string;
  login: string;
  name: string;
  page = 1;
  itemsByPage = 30;
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

    const params = new URLSearchParams();

    params.set('page', filter.page.toString());
    params.set('size', filter.itemsByPage.toString());

    return this.http.get(`${this.repositoryUrl}/${filter.login}/${filter.name}/pulls?state=open`, { search: params })
      .toPromise()
      .then(response => {
        const prs = response.json();

        const results = [];

        prs.forEach(pr => {
          const labels = [];

          pr.labels.forEach(label => {

            const infoLabel = {
              name: label.name,
              color: '#' + label.color,
              url: label.url,
            }

            labels.push(infoLabel);
          });

          const infoPr = {
            title: pr.title,
            htmlUrl: pr.html_url,
            number: pr.number,
            userLogin: pr.user.login,
            labelsPr: labels
          };

          results.push(infoPr);
        });

        const result = {
          results,
          totalPrs: prs.number,
        };

        return result;
      });
  }
}

// https://api.github.com/repos/angular/components
// /repos/:owner/:repo

// https://api.github.com/repos/angular/components/pulls
// /repos/:owner/:repo/pulls
