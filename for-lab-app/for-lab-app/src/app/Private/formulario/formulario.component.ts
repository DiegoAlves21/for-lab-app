import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Bem vindo! Vamos começar?</h4>
    </div>
    <div class="modal-body">
      <p>Deseja Carregar seus dados Bancários?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-success" (click)="activeModal.close('Close click')">Sim</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Não</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder, private modalService: NgbModal) { }
  element: any;

  ngOnInit(): void {
    this.open();
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }


}
