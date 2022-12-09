import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import * as actions from "./todo.actions";

export const initialState: Todo[] = [
    new Todo('Salvar al mundo')
]; // array de todos

const _todoReducer = createReducer(initialState,
    
    // CREAR
    on(actions.crear, (state, {texto}) => [...state, new Todo( texto )]), // [...] retornar nuevo array
   
    // MARCAR/DESMARCAR
    on(actions.toggle, (state, {id}) => {

        return state.map(todo => {

            if (todo.id === id) {
                return {
                    ...todo, // extrae todas las propiedades
                    completado: !todo.completado // el completado estará cambiando al valor contrario
                }
            } else {
                return todo;
            }
        });
    }),

    // EDITAR
    on(actions.editar, (state, {id, texto}) => {

        return state.map(todo => {

            if (todo.id === id) {
                return {
                    ...todo, // extrae todas las propiedades
                    texto  // = texto: texto
                }
            } else {
                return todo;
            }
        });
    }),

    // BORRAR
    // filter regresa un nuevo arreglo solo si los ids son dif al recibido
    on(actions.borrar, (state, {id}) => state.filter(todo => todo.id !== id)),

    // MARCAR/DESMARCAR TODOS
    on(actions.toggleAll, (state, {completado}) => {

        return state.map(todo => {
            return {
                ...todo, // extrae todas las propiedades
                completado: completado  // = texto: texto
            }
        });
    }),
      // BORRAR COMPLETADOS
      on(actions.borrarCompletados, (state) => state.filter(todo => !todo.completado)),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
    return _todoReducer(state, action)

}