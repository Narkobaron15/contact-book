import {Component, OnInit} from '@angular/core'
import {HeaderComponent} from "../header/header.component"
import {HomeComponent} from "../home/home.component"
import {FooterComponent} from "../footer/footer.component"
import {FlowbiteService} from "../../services/flowbite/flowbite.service"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'contact-book'
  constructor(private flowbiteService: FlowbiteService) {
  }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite()
  }
}
