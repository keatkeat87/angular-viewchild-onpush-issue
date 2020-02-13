import {
  Component, OnInit, ViewChildren, QueryList,
  AfterViewInit, ViewChild, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { SelectionListComponent } from '../selection-list/selection-list.component';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements OnInit, AfterViewInit {

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  @ViewChildren(SelectionListComponent)
  list: QueryList<SelectionListComponent>;

  @ViewChild('template', { read: TemplateRef })
  template: TemplateRef<any>;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.list.changes.subscribe(() => console.log('list.changes'));
  }

}
