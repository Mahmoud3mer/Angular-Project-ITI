import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import homeComponent from './home/home.component';
import { FormsModule } from '@angular/forms';  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,homeComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngularProject';
  // userName: string = "Mahmoud";
  // haveAcar: boolean = true;
  // userAge: number = 10;
  // imgURL: string = '../assets/Images/26.avif';
  // // changeName(x:any){
  // //   this.userName = x.target.value;
  // // }

}
