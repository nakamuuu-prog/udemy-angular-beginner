import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() name: string = '';
  @Output() notify = new EventEmitter();
}
