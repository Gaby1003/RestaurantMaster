import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerUser: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,) {
      this.registerUser = this.fb.group({
        document: ['', Validators.required],
        name: ['', Validators.required],
        lastname: ['', [Validators.required]],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit( ): void {
  }

  addUser() {
    this.submitted = true;
    const cliente: any = {
      document: this.registerUser.value.document,
      name: this.registerUser.value.name,
      lastname: this.registerUser.value.lastname,
      phone: this.registerUser.value.phone,
      email: this.registerUser.value.email,
      password: this.registerUser.value.password
    }
    this.router.navigate(['costumer/login']);
    // this.loading = true;
    // this._clienteService.agregarCliente(cliente).then(() => {
    //   this.toastr.success("El cliente fue registrado exitosamente", 'Cliente Registrado')
    //   this.loading = false;
    //   this.router.navigate(['/lista-cliente']);
    // }).catch(error => {
    //   console.log(error);
    //   this.loading = false;
    // })
  }

}
