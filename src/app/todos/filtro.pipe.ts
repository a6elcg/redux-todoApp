import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})

export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos) {
    console.log(todos, filtro);

    switch (filtro) {
      case 'completados':
        return todos.filter( todo => todo.completado );
      case 'pendientes':
        return todos.filter( todo => !todo.completado );   
      default:
        return todos;
    }
    
  }

}
