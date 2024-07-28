import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import homeComponent from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,homeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngularProject';
}
