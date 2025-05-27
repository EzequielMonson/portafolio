import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GithubComponent } from './pages/github/github.component';
import { StudiesComponent } from './pages/studies/studies.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'github', component: GithubComponent },
  { path: 'estudios', component: StudiesComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' },
];