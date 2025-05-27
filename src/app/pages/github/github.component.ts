import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {
  repositorios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://api.github.com/users/EzequielMonson/repos')
      .subscribe((data) => {
        this.repositorios = data.sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
      });
  }
}
