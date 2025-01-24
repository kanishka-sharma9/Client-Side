import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btn_text:string="";
  @Input() btn_class:string="";
  
  @Output() on_btn_click = new EventEmitter<any>();

  on_click(){
    debugger;
    this.on_btn_click.emit("admin");
  }
}
