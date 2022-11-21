import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  reserve: FormGroup;
  submitted = false;
  sucursal:string[];
  table:string[];

  constructor(private fb: FormBuilder,
    private router: Router,) {
    this.reserve = this.fb.group({
      sucursal_info: ['', Validators.required],
      name: ['', Validators.required],
      document: ['', [Validators.required]],
      date: ['', Validators.required],
      hour: ['', Validators.required],
      quantity: ['', Validators.required],
      table_info: ['', Validators.required]
    })
    this.sucursal = ["Sucursal 1","Sucursal 2","Sucursal 3"]
    this.table = ["Mesa 1","Mesa 2","Mesa 3"]
  }

  ngOnInit(): void {
  }

  addReserve() {
    this.submitted = true;
    const cliente: any = {
      sucursal: this.reserve.value.sucursal,
      name: this.reserve.value.name,
      document: this.reserve.value.document,
      date: this.reserve.value.date,
      hour: this.reserve.value.hour,
      quantity: this.reserve.value.quantity,
      table: this.reserve.value.table,
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
