import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-template',
  templateUrl: './test-template.component.html',
  styleUrls: ['./test-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
