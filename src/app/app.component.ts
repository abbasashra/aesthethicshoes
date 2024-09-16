import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { ProductComponent } from "./product/product.component";
import { ProductformalComponent } from "./productformal/productformal.component";
import { SportshoesComponent } from './sportshoes/sportshoes.component';
import { SlippersComponent } from "./slippers/slippers.component";
import { CategoriesComponent } from "./categories/categories.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, ProductComponent, ProductformalComponent, SportshoesComponent, SlippersComponent, CategoriesComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aestheticshoes';
}
