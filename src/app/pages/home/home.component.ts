import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  perfil: any = {};

  constructor(private http: HttpClient){}
  
  ngOnInit() {
    this.http.get('https://api.github.com/users/EzequielMonson')
      .subscribe((data: any) => {
        this.perfil = data;
      });
  }
  
}
