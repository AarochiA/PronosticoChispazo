import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './UI/shared/components/header/header.component';
// import { NavbarComponent } from './UI/shared/components/navbar/navbar.component';
// import { FooterComponent } from './UI/shared/components/footer/footer.component';
// import { ContentModalComponent } from './UI/shared/components/contentmodal/contentmodal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // , FooterComponent, NavbarComponent, HeaderComponent,ContentModalComponent
  template: `
  <!-- <app-contentmodal></app-contentmodal>
  <app-header></app-header>
  <app-contentmodal></app-contentmodal>
  <app-navbar></app-navbar> -->
  <router-outlet></router-outlet>
`,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Pronostico Chispazo';
}
