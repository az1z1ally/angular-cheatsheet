import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MasterService } from 'src/app/services/master.service';
import { Color } from 'src/app/types/colorModel';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  colorArray: string[] = ['Red', 'Green', 'Yellow']
  filterOptions!: Observable<string[]>

  formControl = new FormControl('')
  colorList!: Color[]
  filterOptionsList!: Observable<Color[]>

  constructor (private service: MasterService) {
    this.service.getColorList().subscribe(colors => {
      this.colorList = colors
      
      this.filterOptionsList = this.formControl.valueChanges.pipe(
        startWith(''),
        map(value => this._listFilter(value || ''))
      )
      
    })
  }

  ngOnInit(): void {
    this.filterOptions = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    )
  }

  private _filter(value: string): string[] {
    const searchValue = value.toLowerCase()
    return this.colorArray.filter(option => option.toLowerCase().includes(searchValue));
  }

  private _listFilter(value: string): Color[] {
    const searchValue = value.toLowerCase()
    return this.colorList.filter(color => color.name.toLowerCase().includes(searchValue) || color.code.toLowerCase().includes(searchValue));
  }
}
