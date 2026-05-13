import { Component } from '@angular/core';
import { ServerStatusComponent } from "./Components/server-status/server-status.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { TrafficDetailsComponent } from "./Components/traffic-details/traffic-details.component";
import { SupportTicketsComponent } from "./Components/support-tickets/support-tickets.component";

@Component({
  selector: 'app-root',
  imports: [ServerStatusComponent, NavbarComponent, TrafficDetailsComponent, SupportTicketsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  
}
