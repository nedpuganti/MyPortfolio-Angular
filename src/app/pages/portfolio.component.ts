import { Component } from '@angular/core';
import { ProjectsComponent } from '../components/projects.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pfo-portfolio',
  template: ` <pfo-projects></pfo-projects> `,
  styles: [],
  standalone: true,
  imports: [RouterLink, ProjectsComponent]
})
export class PortfolioComponent {}
