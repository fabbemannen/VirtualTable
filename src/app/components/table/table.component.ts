import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableVirtualScrollDataSource, TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';

const DATA = Array.from({ length: 1000 }, (v, i) => ({
  id: i + 1,
  name: `Element #${i + 1}`
}));

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    ScrollingModule,
    TableVirtualScrollModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource = new TableVirtualScrollDataSource();

  ngOnInit(): void {
    this.displayedColumns = ['id', 'name'];
    this.dataSource.data = DATA;
  }
}
