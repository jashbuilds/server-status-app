import { AfterViewInit, Component, contentChild, contentChildren, ElementRef, OnInit, output, viewChild, ViewChild, viewChildren } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>
  private form = viewChild<ElementRef<HTMLFormElement>>('form')
  input = viewChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input')

  add = output<{title: string, text: string}>()

  onSubmit(title: string, request: string, form: HTMLFormElement) {
    this.add.emit({ title: title, text: request })

    // console.log(this.input()?.nativeElement.value);
    this.form()?.nativeElement.reset()
  }

  ngOnInit() {
    console.log("ON INIT");
    console.log(this.form()?.nativeElement);
  }

  ngAfterViewInit() {
    console.log("AFTER VIEW INIT");
    console.log(this.form()?.nativeElement);
  }
  
}
