import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.less'],
})
export class EditPageComponent {
  public stockData: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.stockData = history.state.data;
    console.log(this.stockData);

    if (!this.stockData) {
      this.router.navigate(['/entry-page']);
    }
  }
}
