import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'spinner',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
})
export class SpinnerComponent {
  @Input() size: number
  @Input() background: string
  @Input() darkBackground: string
  @Input() color: string
  @Input() alignment: "left" | "center" | "right"

  constructor() {
    this.size = 8
    this.background = "gray-200"
    this.darkBackground = "gray-600"
    this.color = "blue-600"
    this.alignment = "center"
  }

  get classes(): string[] {
    return [
      `w-${this.size}`,
      `h-${this.size}`,
      `text-${this.background}`,
      `dark:text-${this.darkBackground}`,
      `fill-${this.color}`,
      `text-${this.alignment}`,
    ]
  }
}
