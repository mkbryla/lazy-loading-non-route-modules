import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public load: boolean;

  public onButtonClick(): void {
    this.load = true;
  }
}
