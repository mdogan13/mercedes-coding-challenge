import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/constants/routes';

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

    if (!this.stockData) {
      this.router.navigate([`/${APP_ROUTES.ENTRY_PAGE}`]);
    }
  }
}
