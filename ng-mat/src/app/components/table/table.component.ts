import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MasterService } from 'src/app/services/master.service';
import { Product, ProductWithoutImages } from 'src/app/types/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  products: ProductWithoutImages[] = [];
  dataSource!: MatTableDataSource<ProductWithoutImages>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[];
  columnNames = [{
    id: 'id',
    value: 'ID',

    }, 
    {
      id: 'title',
      value: 'Title',
    },
    {
      id: 'description',
      value: 'Desc',
    },
    {
      id: 'price',
      value: 'Price',
    },
    {
      id: 'discountPercentage',
      value: 'Discount%'
    },
    {
      id: 'rating',
      value: 'Rating'
    },
    {
      id: 'stock',
      value: 'Stock'
    },
    {
      id: 'brand',
      value: 'Brand'
    },
    {
      id: 'category',
      value: 'Category'
    },
    {
      id: 'thumbnail',
      value: 'Thumbnail'
    }
  ];
 
  constructor(private service: MasterService) {
    this.displayedColumns = this.columnNames.map(item => item.id)
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getProducts().subscribe({
      next: (data: Product[]): void => {
        this.products = this.removeImagesKey(data);
        this.dataSource = new MatTableDataSource(this.products)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },

      error: (error: HttpErrorResponse): void => {
        if(error instanceof ErrorEvent) {
          console.error(`Something is not right!, please try after sometime or report to our support team`);
        } else {
          // Server-side error
          console.error(`Server responded with ${error.error.error}: ${error.error.error_description}`);
        }
        
      }
    })
  }

  // Function to remove the 'images' key from an array of Product objects
  removeImagesKey(products: Product[]): ProductWithoutImages[] {
    return products.map(product => {
        // Destructure the product object, excluding the 'images' key
        const { images, ...productWithoutImages } = product;
        return productWithoutImages;
    });
  }

  applyFilter(event: KeyboardEvent): void{
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }
}
