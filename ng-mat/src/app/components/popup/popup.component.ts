import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from 'src/app/services/master.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit{
  inputData: any
  editData!: Product
  closingMessage = 'Closed using directive'

  productForm = this.fb.nonNullable.group({
    title: this.fb.control('', Validators.required),
    desc: this.fb.control('', Validators.required),
    price: this.fb.control(0.00, Validators.required),
    discount: this.fb.control(0, Validators.required),
    rating: this.fb.control(0, Validators.required),
  })

  constructor(
    private ref: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private service: MasterService
    ) {

  }
  ngOnInit(): void {
    this.inputData = this.data
    if(this.inputData.id) {
      this.setPopupData(this.inputData.id)
    }
  }

  setPopupData(id: number): void {
    this.service.getProductById(id).subscribe(product =>{
      this.editData = product
      this.productForm.setValue({title:this.editData.title, desc:this.editData.description, price:this.editData.price, discount:this.editData.discountPercentage, rating: this.editData.rating})
    })
  }

  closePopUp(): void {
    this.ref.close('Closed using function')
  }

  saveProduct(): void {
    if(this.productForm.invalid) return

    this.service.saveProduct(this.productForm.value).subscribe((resp) => {
      this.closePopUp()
    })
  }

}
