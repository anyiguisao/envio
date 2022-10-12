import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor( private PlacesService: PlacesService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      text: new FormControl('', [Validators.maxLength(200)]),
      category: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });

    //this.form.valueChanges
    //.pipe(
     // debounceTime(500)
    //)
    //.subscribe(value => {
     // console.log(value);
    //});
  }
  async save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
    const respuesta= await this.PlacesService.addPlace(this.form.value);
    console.log(respuesta);
  }
}