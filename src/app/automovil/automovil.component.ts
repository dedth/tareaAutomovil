import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface tipoplaca {
  name: string,
  code: string
}

@Component({
  selector: 'app-automovil',
  templateUrl: './automovil.component.html',
  styleUrls: ['./automovil.component.scss']
})
export class AutomovilComponent {


  
onSubmit() {
throw new Error('Method not implemented.');
}
  tipoplaca: tipoplaca[] = [];

  selectedplaca: tipoplaca[] = [];

  countries: any[] = [];

  selectedCity: any;
  lenguaje: any[] = [];

  formGroup: FormGroup | undefined;

  value!: number;

  paymentOptions: any[] = [
    { name: 'Automatico 1', value: 1 },
    { name: 'Manual     2', value: 2 },
    { name: 'Mecanico   3', value: 3 }
    
  ];
  


  ngOnInit() {

    this.lenguaje = [
      { name: 'Nuevo', code: 'NV' },
      { name: 'Usado', code: 'UD' },
    ];

    this.formGroup = new FormGroup({
      value: new FormControl(32)
    });

    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null),
      value: new FormControl(4),
      selectedLenguaje: new FormControl<string | null>(null)
    });


    this.tipoplaca = [
      { name: 'Pichincha', code: 'P14-5787' },
      { name: 'Guayaquil', code: 'G14-5787' },
      { name: 'Cuenca', code: 'C14-5787' },
      { name: 'Ambato', code: 'A14-5787' },
      { name: 'Loja', code: 'L14-5787' }
    ];
    this.formGroup = new FormGroup({
      selectedCity: new FormControl<object | null>(null)
    });

    this.countries = [
      {
        name: 'Seleccion',
        code: 'AU',
        states: [
          {
            name: 'Camion',
            cities: [
              { cname: 'Diesel', code: 'C/D' },
              
            ]
          },
          {
            name: 'Vehiculo',
            cities: [
              { cname: 'Gasolina', code: 'V/G' },
              
            ]
          }
        ]
      },
      
    ];

  }



  modelo: string = '';
  placa: string = '';
  fechaCompra: Date = new Date();
  opcion: string = '';
  detalles: string = '';
  estado: boolean = false;
  calificacionVehiculo: string = '';
  modo: string = '';
  uso: string = '';
  cantidad: number = 0;


  form: FormGroup;//Reactive Form

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      modelo: ['', [Validators.requiredTrue]],
      placa: ['', [Validators.required, Validators.minLength(7)]],
      fechaCompra: [new Date()],
      opcion: ['', [Validators.required, Validators.minLength(3)]],
      detalles: ['', [Validators.min(1)]],
      estado: [false, [Validators.requiredTrue]],
      calificacionVehiculo: ['', [Validators.requiredTrue]],
      modo: ['', [Validators.requiredTrue]],
      uso: ['', [Validators.requiredTrue]],
      cantidad: [0, [Validators.requiredTrue]],

    })
  }

  onSubmitk() {
    console.log(this.form);
    if (this.form.valid) {
      alert('Guardado');
    } else {
      alert('Formulario No Valido');
    }
  }

  validateForm() {
    if (this.modelo === '' && this.modelo.length <= 3) {

    }
  }
}

  
