import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'stock-edit-form',
  templateUrl: './stock-edit-form.component.html',
  styleUrls: ['./stock-edit-form.component.less'],
})
export class StockEditFormComponent {
  @Input() stockData: any;
  public myForm: FormGroup;
  public hasChangesMade: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.stockData = JSON.parse(this.stockData);
    console.log('Received', this.stockData);

    this.myForm = this.fb.group({
      carId: [{ value: this.stockData.id, disabled: true }],
      inStock: [this.stockData.inStock],
      horsePower: [
        this.stockData.horsePower,
        [Validators.required, Validators.min(100), Validators.max(550)],
      ],
      price: [this.stockData.price, Validators.required],
      color: [this.stockData.color.selected],
    });

    this.myForm.valueChanges.subscribe((changes) => {
      this.hasChangesMade = true;
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      let params = {
        carId: this.stockData.id,
        newStockData: {
          ...this.myForm.value,
          id: this.stockData.id,
          color: {
            selected: this.myForm.value.color,
            options: this.stockData.color.options,
          },
        },
      };
      this.setStockData(params);
    }
  }

  setStockData(params: any) {
    this.apiService
      .setStockData(params)
      .then((response: any) => {
        this.goToEntryPage();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  goToEntryPage() {
    this.router.navigate(['/entry-page']);
  }
}
