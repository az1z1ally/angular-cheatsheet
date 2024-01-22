import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface Country {
  name: string,
  cities: string[]
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{
  today: Date = new Date();
  startDate: Date = new Date(1970,0,1);
 
  termList: Array<string> =['15days', '30days', '45days', '65days']

  countryList: Array<Country> = [
    {name: 'Tanzania', cities: ['DSM', 'ZNZ', 'Tanga', 'Morogoro', 'Dodoma']},
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing'] },
  ];

  cities: Array<string> = [];

  form = this.fb.group({
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
    phone: this.fb.control('', Validators.required),
    country: this.fb.control('Tanzania', Validators.required),
    city: this.fb.control('DSM', Validators.required),
    address: this.fb.control('', Validators.required),
    term: this.fb.control('', Validators.required),
    dob: this.fb.control(new Date(this.startDate)),
    gender: this.fb.control('male', Validators.required),
    status: this.fb.control(true),
  });

  constructor(private fb: FormBuilder) {
    this.today = JSON.parse(JSON.stringify(this.today)).substring(0, 10);
  }

  ngOnInit() {
    this.form.setValue({
      name:'Aaaaaa', email: 'a@a.com', phone: '0700110011', country: 'Tanzania',city: null, address: 'Address', term: '15days', dob: new Date(1970,0,1), gender: 'male', status: true
    })
  }

  changeCountry(name: string): string[]{
    this.countryList.find(country => {
      if(country.name == name){
        this.cities = country.cities
      }
    });

    return this.cities
  }

  saveCustomer(): void {
    console.log(this.form.value); 
  }

  clearForm(): void {
    this.form.reset()
  }
}
