import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  protected activeWindow: 'sobre-mi' | 'proyectos' | 'contacto' | null = null;

  protected openWindow(window: 'sobre-mi' | 'proyectos' | 'contacto'): void {
    this.activeWindow = window;
  }

  protected closeWindow(): void {
    this.activeWindow = null;
  }
}
