import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eShopping';
  choice: string = "home";
  data: string = "This will show how to create a custom pipe";
}
