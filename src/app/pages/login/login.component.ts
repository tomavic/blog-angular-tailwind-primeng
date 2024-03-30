import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    ToggleButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextareaModule,
    InputTextModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  LoginForm = new FormGroup({
    checked: new FormControl(true, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.maxLength(10)])
  });

  ngOnInit(): void {
    this.LoginForm.valueChanges.subscribe({
      next: formValue => {
        if (formValue.checked) {
          this.LoginForm.controls.bio.addValidators([Validators.required]);
        } else {
          this.LoginForm.controls.bio.removeValidators([Validators.required]);
        }
        this.LoginForm.controls.bio.updateValueAndValidity({ emitEvent: false });
      }
    });
  }

  submit() {
    console.log(this.LoginForm.value);
  }
}
