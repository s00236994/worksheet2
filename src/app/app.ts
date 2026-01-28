import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Martin Durkin worksheet2');

  protected movies = signal([
    "Law Abiding Citizen",
    "Seven",
    "Rambo",
    "Scarface",
    "Real Steel"

  ])



}


