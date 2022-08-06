import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-newsletter',
  templateUrl: './form-newsletter.component.html',
  styleUrls: ['./form-newsletter.component.scss']
})
export class FormNewsletterComponent implements OnInit {

  sucesso = false;
  erro = false;

  form = new FormGroup({
    email: new FormControl({ value: '', disabled: false }, [Validators.required, Validators.email]),
  })

  constructor() { }

  ngOnInit(): void {
  }

  inscrever() {
    if (this.form.valid) {
      this.erro = false;
      this.sucesso = true;
      this.form.get('email')?.disable();
    } else {
      this.erro = true;
    }
  }

}
