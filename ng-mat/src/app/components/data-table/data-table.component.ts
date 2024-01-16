import { Component, OnInit, ViewChild } from '@angular/core';
import { DataRepresentation, TableService } from '../../services/table.service';
import { HttpErrorResponse } from '@angular/common/http';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit{
  displayedColumn: string[] = ['id', 'userId', 'title', 'body']
  posts: DataRepresentation[] = []

  dataSource!: MatTableDataSource<DataRepresentation>
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor (private service: TableService) {}

  ngOnInit(): void {
    this.service.getData()
    .subscribe({
      next: (data) => {
        console.log(data);
        this.posts = data;

        this.dataSource = new MatTableDataSource(this.posts)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this .sort
      },

      error: (err: HttpErrorResponse) => {
        console.error('An error occured:', err);  
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
}
