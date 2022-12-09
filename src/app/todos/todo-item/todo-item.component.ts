import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  checkCompletado!: FormControl;
  txtInput!: FormControl;
  editando: boolean = false;

  constructor(
    private store: Store<AppState>
  ) {

   }

  ngOnInit(): void {
    console.log(this.todo);
    
    this.checkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
  
    this.checkCompletado.valueChanges.subscribe( valor =>{
      console.log(valor);
      this.store.dispatch(actions.toggle({id: this.todo.id}))
    })
  }

  // habilitar input para edicion
  editar(){
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select(); // selecciona el texto del input a editar
      
    }, 2);
  }

  // quitar foco del input y enviar la edición
  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.texto ) { return; }

    this.store.dispatch(actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }))
  }

  borrar() {
    this.store.dispatch( actions.borrar({ id: this.todo.id }));
  }

}
