import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, signal, OnInit, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [NgClass],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online')
  private destroyRef = inject(DestroyRef)

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
      
    })
  }

  ngOnInit() {
    // console.log("ON INIT");
    
    const interval = setInterval(() => {
      const randomNum = Math.random()

      if (randomNum < 0.5) {
        this.currentStatus.set('online')
      } else if (randomNum < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }
    }, 4000)

    this.destroyRef.onDestroy(() => {
      clearInterval(interval)
    })
  }

  ngAfterViewInit() {
    // console.log("AFTER VIEW INIT");
  }

  // ngOnDestroy() {
  //   console.log("ON DESTROY");
  //   clearTimeout(this.interval)
  // }
}
