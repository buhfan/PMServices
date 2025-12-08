import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  templateUrl: './placeholder.html',
  styleUrls: ['./placeholder.scss'],
})
export class PlaceholderComponent {
  readonly title = 'PMServices – IAM фронт';
  readonly subtitle = 'Стартовый экран Sprint 0';
}
