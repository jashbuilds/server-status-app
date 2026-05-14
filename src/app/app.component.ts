import { Component } from '@angular/core';
import { ServerStatusComponent } from './Components/dashboard/server-status/server-status.component';
import { TicketsComponent } from './Components/dashboard/tickets/tickets.component';
import { TrafficComponent } from './Components/dashboard/traffic/traffic.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardItemComponent } from "./Components/dashboard/dashboard-item/dashboard-item.component";


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ServerStatusComponent, TicketsComponent, TrafficComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  
}
