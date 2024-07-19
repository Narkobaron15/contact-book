import { Component } from '@angular/core'
import {RouterLink, RouterLinkActive} from "@angular/router"
import {NgOptimizedImage} from "@angular/common"

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
